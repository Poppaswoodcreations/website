import { useState, useEffect, useRef } from 'react';
import { supabase, supabaseAdmin } from '../lib/supabase';
import { Product } from '../types';
import { products as staticProducts } from '../data/products';

// AGGRESSIVE CACHE - Store full product data for 4 hours
const CACHE_KEY = 'poppas-products-full-cache';
const CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 HOURS (was 5 minutes)

interface ProductCache {
  timestamp: number;
  products: Product[];
}

const getCache = (): Product[] | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const data: ProductCache = JSON.parse(cached);
      const age = Date.now() - data.timestamp;
      
      // Check if cache is still valid
      if (age < CACHE_DURATION) {
        const minutesOld = Math.floor(age / 60000);
        console.log(`✅ Using cached products (${minutesOld} minutes old)`);
        return data.products;
      }
      
      console.log('⏰ Cache expired, will fetch fresh data');
      localStorage.removeItem(CACHE_KEY);
    }
  } catch (e) {
    console.warn('Cache read failed:', e);
    localStorage.removeItem(CACHE_KEY);
  }
  return null;
};

const setCache = (products: Product[]) => {
  try {
    const cacheData: ProductCache = {
      timestamp: Date.now(),
      products
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    console.log(`💾 Cached ${products.length} products for 4 hours`);
  } catch (e) {
    console.warn('Cache write failed (quota exceeded):', e);
    // If quota exceeded, try to clear old cache and retry
    try {
      localStorage.removeItem(CACHE_KEY);
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        products
      }));
    } catch (retryError) {
      console.error('Cache retry failed');
    }
  }
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadingRef = useRef(false);

  // Load products from cache first, then Supabase if needed
  const loadProducts = async () => {
    // Prevent duplicate simultaneous loads
    if (loadingRef.current) {
      console.log('⏭️ Load already in progress, skipping...');
      return;
    }

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    console.log('🔄 useProducts: Loading products...');

    try {
      // STEP 1: Try cache first (saves bandwidth!)
      const cachedProducts = getCache();
      if (cachedProducts && cachedProducts.length > 0) {
        setProducts(cachedProducts);
        setLoading(false);
        loadingRef.current = false;
        return; // EXIT EARLY - No Supabase call needed!
      }

      // STEP 2: Cache miss - fetch from Supabase
      if (supabaseAdmin) {
        console.log('🌐 Cache miss - fetching from Supabase...');
        
        const { data, error } = await supabaseAdmin
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('❌ Supabase error:', error);
          throw error;
        }

        if (data && data.length > 0) {
          console.log(`✅ Loaded ${data.length} products from Supabase`);
          
          // Convert database format to Product format
          const convertedProducts: Product[] = data.map(dbProduct => {
            let parsedImages = dbProduct.images;
            if (typeof dbProduct.images === 'string') {
              try {
                parsedImages = JSON.parse(dbProduct.images);
              } catch (e) {
                parsedImages = [dbProduct.images];
              }
            }

            return {
              id: dbProduct.id,
              name: dbProduct.name,
              description: dbProduct.description,
              price: dbProduct.price,
              category: dbProduct.category,
              images: Array.isArray(parsedImages) ? parsedImages : [parsedImages],
              inStock: dbProduct.in_stock,
              featured: dbProduct.featured,
              weight: dbProduct.weight || 0.5,
              stockQuantity: dbProduct.stock_quantity || 5,
              seoTitle: dbProduct.seo_title || '',
              seoDescription: dbProduct.seo_description || '',
              seoKeywords: dbProduct.seo_keywords || '',
              createdAt: dbProduct.created_at,
              updatedAt: dbProduct.updated_at
            };
          });
          
          setProducts(convertedProducts);
          setCache(convertedProducts); // Cache FULL product data
          setLoading(false);
          loadingRef.current = false;
          return;
        }
      }

      // STEP 3: Fallback to static products
      console.log('📦 Using static products fallback...');
      setProducts(staticProducts);
      setCache(staticProducts);

    } catch (error) {
      console.error('❌ Error loading products:', error);
      
      // Try cache one more time on error
      const cachedProducts = getCache();
      if (cachedProducts && cachedProducts.length > 0) {
        console.log('🔄 Using cached products after error');
        setProducts(cachedProducts);
      } else {
        setProducts(staticProducts);
      }
      
      setError('Failed to load products, using cached data');
    } finally {
      setLoading(false);
      loadingRef.current = false;
      console.log('✅ Product loading completed');
    }
  };

  // Clear cache when saving/updating products (admin actions)
  const clearCache = () => {
    try {
      localStorage.removeItem(CACHE_KEY);
      console.log('🗑️ Product cache cleared');
    } catch (e) {
      console.warn('Failed to clear cache:', e);
    }
  };

  // Save product to Supabase
  const saveProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      console.log('💾 Saving product:', product.name);
      
      if (!supabaseAdmin) {
        throw new Error('Supabase admin client not connected');
      }
      
      const dbProduct = {
        id: `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: product.name,
        description: product.description,
        price: Number(product.price),
        category: product.category,
        images: Array.isArray(product.images) ? product.images : [product.images || ''],
        in_stock: product.inStock,
        featured: product.featured,
        weight: Number(product.weight || 0.5),
        stock_quantity: Number(product.stockQuantity || 5),
        seo_title: product.seoTitle || null,
        seo_description: product.seoDescription || null,
        seo_keywords: product.seoKeywords || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabaseAdmin
        .from('products')
        .insert([dbProduct])
        .select()
        .single();

      if (error) {
        throw new Error(`Database save failed: ${error.message}`);
      }

      console.log('✅ Product saved successfully');
      clearCache(); // Clear cache so next load gets fresh data
      await loadProducts();
      return data;
    } catch (error) {
      console.error('❌ Save error:', error);
      throw error;
    }
  };

  // Update product in Supabase
  const updateProduct = async (productId: string, updates: Partial<Product>) => {
    try {
      if (!supabaseAdmin) {
        throw new Error('Supabase admin client not connected');
      }
      
      const dbUpdates: any = {
        updated_at: new Date().toISOString()
      };
      
      if (updates.name !== undefined) dbUpdates.name = updates.name;
      if (updates.description !== undefined) dbUpdates.description = updates.description;
      if (updates.price !== undefined) dbUpdates.price = Number(updates.price);
      if (updates.category !== undefined) dbUpdates.category = updates.category;
      if (updates.images !== undefined) {
        dbUpdates.images = Array.isArray(updates.images) ? updates.images : [updates.images || ''];
      }
      if (updates.inStock !== undefined) dbUpdates.in_stock = updates.inStock;
      if (updates.featured !== undefined) dbUpdates.featured = updates.featured;
      if (updates.weight !== undefined) dbUpdates.weight = Number(updates.weight);
      if (updates.stockQuantity !== undefined) dbUpdates.stock_quantity = Number(updates.stockQuantity);
      if (updates.seoTitle !== undefined) dbUpdates.seo_title = updates.seoTitle;
      if (updates.seoDescription !== undefined) dbUpdates.seo_description = updates.seoDescription;
      if (updates.seoKeywords !== undefined) dbUpdates.seo_keywords = updates.seoKeywords;
      
      const { data, error } = await supabaseAdmin
        .from('products')
        .update(dbUpdates)
        .eq('id', productId)
        .select()
        .single();

      if (error) {
        throw new Error(`Database update failed: ${error.message}`);
      }

      console.log('✅ Product updated successfully');
      clearCache(); // Clear cache so next load gets fresh data
      await loadProducts();
      return data;
    } catch (error) {
      console.error('❌ Update error:', error);
      throw error;
    }
  };

  // Delete product from Supabase
  const deleteProduct = async (productId: string) => {
    try {
      if (!supabaseAdmin) {
        throw new Error('Supabase admin client not connected');
      }
      
      const { error } = await supabaseAdmin
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;

      console.log('✅ Product deleted successfully');
      clearCache(); // Clear cache so next load gets fresh data
      await loadProducts();
    } catch (error) {
      console.error('❌ Delete error:', error);
      throw error;
    }
  };

  // Bulk import products
  const bulkImportProducts = async (newProducts: Product[]) => {
    try {
      if (!supabaseAdmin) {
        throw new Error('Supabase admin client not connected');
      }
      
      const supabaseProducts = newProducts.map(product => ({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        images: product.images,
        in_stock: product.inStock,
        featured: product.featured,
        weight: product.weight,
        stock_quantity: product.stockQuantity || 5,
        seo_title: product.seoTitle,
        seo_description: product.seoDescription,
        seo_keywords: product.seoKeywords
      }));

      const { data, error } = await supabaseAdmin
        .from('products')
        .insert(supabaseProducts)
        .select();

      if (error) throw error;

      console.log(`✅ Bulk imported ${data.length} products`);
      clearCache(); // Clear cache so next load gets fresh data
      await loadProducts();
      return data;
    } catch (error) {
      console.error('❌ Bulk import error:', error);
      throw error;
    }
  };

  useEffect(() => {
    loadProducts();
  }, []); // Only load once on mount

  return {
    products,
    loading,
    error,
    loadProducts,
    forceReload: () => {
      clearCache();
      return loadProducts();
    },
    saveProduct,
    updateProduct,
    deleteProduct,
    bulkImportProducts,
    isSupabaseConnected: !!supabase,
    isAdminConnected: !!supabaseAdmin
  };
};
