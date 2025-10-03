/*
  # Create products table for Poppa's Wooden Creations

  1. New Tables
    - `products`
      - `id` (text, primary key)
      - `name` (text, not null)
      - `description` (text)
      - `price` (numeric)
      - `category` (text)
      - `images` (text array)
      - `in_stock` (boolean)
      - `stock_quantity` (integer)
      - `weight` (numeric)
      - `featured` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS products (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  price numeric,
  category text,
  images text[],
  in_stock boolean DEFAULT true,
  stock_quantity integer DEFAULT 5,
  weight numeric DEFAULT 0.5,
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