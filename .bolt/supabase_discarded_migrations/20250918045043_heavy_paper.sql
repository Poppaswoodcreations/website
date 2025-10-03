/*
  # Create products table for Poppa's Wooden Creations

  1. New Tables
    - `products`
      - `id` (text, primary key)
      - `name` (text, required)
      - `description` (text)
      - `price` (numeric, required)
      - `category` (text, required)
      - `images` (text array)
      - `in_stock` (boolean, default true)
      - `stock_quantity` (integer, default 5)
      - `weight` (numeric, default 0.5)
      - `featured` (boolean, default false)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS products (
  id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name text NOT NULL,
  description text,
  price numeric NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  images text[] DEFAULT '{}',
  in_stock boolean DEFAULT true,
  stock_quantity integer DEFAULT 5 CHECK (stock_quantity >= 0),
  weight numeric DEFAULT 0.5 CHECK (weight > 0),
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read products"
  ON products
  FOR SELECT
  TO public
  USING (true);