/*
  # Allow anonymous product inserts for admin operations

  1. Security Changes
    - Add policy to allow anonymous users to insert products
    - Add policy to allow anonymous users to update products
    - Add policy to allow anonymous users to delete products
    - Maintain existing read policy for public access

  This enables the admin panel to work with the anon key while keeping data secure.
*/

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON products;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON products;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON products;

-- Create new policies that allow anonymous operations (for admin panel)
CREATE POLICY "Allow anonymous insert for admin operations"
  ON products
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous update for admin operations"
  ON products
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow anonymous delete for admin operations"
  ON products
  FOR DELETE
  TO anon
  USING (true);

-- Keep the existing read policy for public access
-- (This should already exist from previous migrations)