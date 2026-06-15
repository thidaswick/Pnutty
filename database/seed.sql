-- Pnutty Seed Data
-- Run this AFTER schema.sql in your Supabase SQL Editor

INSERT INTO products (name, slug, category, texture, description, price, size, image_url, badge, is_active)
VALUES
  (
    'Classic Peanut Butter Crunchy',
    'classic-peanut-butter-crunchy',
    'Classic',
    'Crunchy',
    'Roasted peanuts with real crunchy bits. Pure, simple, addictive.',
    1290,
    '300g',
    '/images/classic-crunchy.png',
    'Best Seller',
    true
  ),
  (
    'Choco Peanut Butter Crunchy',
    'choco-peanut-butter-crunchy',
    'Choco',
    'Crunchy',
    'Sweet cocoa swirl meets crunchy roasted peanuts. Dessert in a jar.',
    1490,
    '300g',
    '/images/choco-crunchy.png',
    'New',
    true
  ),
  (
    'Choco Peanut Butter Creamy',
    'choco-peanut-butter-creamy',
    'Choco',
    'Creamy',
    'Silky chocolate peanut blend. Spoon it, spread it, blend it.',
    1490,
    '300g',
    '/images/choco-creamy.png',
    'Fan Favourite',
    true
  ),
  (
    'Classic Peanut Butter Creamy',
    'classic-peanut-butter-creamy',
    'Classic',
    'Creamy',
    'Velvety smooth peanut butter. Perfect on toast, toast, and toast.',
    1290,
    '300g',
    '/images/classic-creamy.png',
    NULL,
    true
  )
ON CONFLICT (slug) DO NOTHING;
