/*
  # Add stock_quantity column to products table

  1. Changes
    - Add `stock_quantity` column to `products` table
    - Set default value to 5 for existing products
    - Add check constraint to ensure non-negative values

  2. Notes
    - Uses IF NOT EXISTS to prevent errors if column already exists
    - Updates existing products to have default stock quantity
*/

-- Add stock_quantity column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'stock_quantity'
  ) THEN
    ALTER TABLE products ADD COLUMN stock_quantity integer DEFAULT 5;
    
    -- Add check constraint for non-negative values
    ALTER TABLE products ADD CONSTRAINT products_stock_quantity_check CHECK (stock_quantity >= 0);
    
    -- Update existing products to have default stock quantity
    UPDATE products SET stock_quantity = 5 WHERE stock_quantity IS NULL;
    
    -- Create index for stock quantity queries
    CREATE INDEX IF NOT EXISTS products_stock_quantity_idx ON products (stock_quantity);
  END IF;
END $$;