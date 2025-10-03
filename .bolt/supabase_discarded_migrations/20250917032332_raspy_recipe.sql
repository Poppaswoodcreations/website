/*
  # Add missing SEO columns to products table

  1. New Columns
    - Add `seo_description` column if missing
    - Add `seo_title` column if missing  
    - Add `seo_keywords` column if missing
    - Add `stock_quantity` column if missing
    - Ensure all columns exist for proper sync

  2. Safety
    - Uses IF NOT EXISTS to prevent errors
    - Safe for existing data
    - Non-destructive operations only
*/

-- Add seo_description column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'seo_description'
  ) THEN
    ALTER TABLE products ADD COLUMN seo_description text;
    RAISE NOTICE 'Added seo_description column';
  ELSE
    RAISE NOTICE 'seo_description column already exists';
  END IF;
END $$;

-- Add seo_title column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'seo_title'
  ) THEN
    ALTER TABLE products ADD COLUMN seo_title text;
    RAISE NOTICE 'Added seo_title column';
  ELSE
    RAISE NOTICE 'seo_title column already exists';
  END IF;
END $$;

-- Add seo_keywords column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'seo_keywords'
  ) THEN
    ALTER TABLE products ADD COLUMN seo_keywords text;
    RAISE NOTICE 'Added seo_keywords column';
  ELSE
    RAISE NOTICE 'seo_keywords column already exists';
  END IF;
END $$;

-- Add stock_quantity column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'stock_quantity'
  ) THEN
    ALTER TABLE products ADD COLUMN stock_quantity integer DEFAULT 5 CHECK (stock_quantity >= 0);
    RAISE NOTICE 'Added stock_quantity column';
  ELSE
    RAISE NOTICE 'stock_quantity column already exists';
  END IF;
END $$;

-- Create indexes for the new columns
CREATE INDEX IF NOT EXISTS products_seo_title_idx ON products(seo_title);
CREATE INDEX IF NOT EXISTS products_stock_quantity_idx ON products(stock_quantity);