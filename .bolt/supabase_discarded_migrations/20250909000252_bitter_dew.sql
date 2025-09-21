/*
  # Create products and categories tables

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `description` (text, not null)
      - `price` (numeric, not null)
      - `category` (text, not null)
      - `images` (text array)
      - `in_stock` (boolean, default true)
      - `featured` (boolean, default false)
      - `weight` (numeric)
      - `stock_quantity` (integer, default 5)
      - `seo_title` (text)
      - `seo_description` (text)
      - `seo_keywords` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policies for public read access and authenticated user management

  3. Triggers
    - Auto-update `updated_at` timestamp
*/

-- Create products table if it doesn't exist
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  images text[] DEFAULT '{}',
  in_stock boolean DEFAULT true,
  featured boolean DEFAULT false,
  weight numeric DEFAULT 0.5 CHECK (weight >= 0),
  stock_quantity integer DEFAULT 5 CHECK (stock_quantity >= 0),
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS products_category_idx ON products (category);
CREATE INDEX IF NOT EXISTS products_featured_idx ON products (featured);
CREATE INDEX IF NOT EXISTS products_in_stock_idx ON products (in_stock);

-- Drop existing policies if they exist, then recreate them
DROP POLICY IF EXISTS "Products are viewable by everyone" ON products;
DROP POLICY IF EXISTS "Products can be managed by authenticated users" ON products;

-- Create policies
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

-- Create or replace the update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists, then create new one
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();