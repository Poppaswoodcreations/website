/*
  # Create products and categories tables

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `category` (text)
      - `images` (text array)
      - `in_stock` (boolean, default true)
      - `featured` (boolean, default false)
      - `weight` (numeric, nullable)
      - `seo_title` (text, nullable)
      - `seo_description` (text, nullable)
      - `seo_keywords` (text, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `description` (text)
      - `image` (text)
      - `product_count` (integer, default 0)
      - `seo_title` (text, nullable)
      - `seo_description` (text, nullable)
      - `seo_keywords` (text, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to manage data
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  images text[] DEFAULT '{}',
  in_stock boolean DEFAULT true,
  featured boolean DEFAULT false,
  weight numeric CHECK (weight >= 0),
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  product_count integer DEFAULT 0,
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create policies for products
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Products can be managed by authenticated users"
  ON products
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policies for categories
CREATE POLICY "Categories are viewable by everyone"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Categories can be managed by authenticated users"
  ON categories
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_featured_idx ON products(featured);
CREATE INDEX IF NOT EXISTS products_in_stock_idx ON products(in_stock);
CREATE INDEX IF NOT EXISTS categories_slug_idx ON categories(slug);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();