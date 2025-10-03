/*
  # Fix RLS policies for admin operations

  1. Security Updates
    - Update RLS policies to allow admin operations
    - Allow public read access for products
    - Allow authenticated users to manage products
    - Fix policy conflicts

  2. Changes
    - Drop existing conflicting policies
    - Create new policies with proper permissions
    - Ensure admin panel can sync products
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Products are viewable by everyone" ON products;
DROP POLICY IF EXISTS "Products can be managed by authenticated users" ON products;

-- Create new policies with proper permissions
CREATE POLICY "Enable read access for all users"
  ON products
  FOR SELECT
  USING (true);

CREATE POLICY "Enable insert for authenticated users"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

-- Also allow service role to bypass RLS for admin operations
ALTER TABLE products FORCE ROW LEVEL SECURITY;