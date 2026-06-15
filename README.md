# Pnutty — Spread the Nutty Goodness

A production-ready Next.js website for **Pnutty**, a premium Sri Lankan peanut butter startup. Built with Next.js App Router, TypeScript, Tailwind CSS, and Supabase.

## Features

- Full marketing homepage matching the reference design
- Product catalog with 4 peanut butter variants
- Shopping cart with drawer sidebar
- Checkout with Supabase order storage
- WhatsApp order message generation
- Contact form with Supabase storage
- Admin dashboard (orders, messages, products CRUD)
- Mobile responsive, SEO friendly, fast loading

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Supabase** (database)
- **Vercel** (hosting)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your images

Place your PNG assets in `assets/`, then copy them to `public/images/`:

```bash
node scripts/create-placeholders.js   # optional: temp placeholders for dev
# Replace placeholders with your real PNGs in public/images/
```

Required images are listed in `assets/README.md`.

### 3. Configure environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
ADMIN_PASSWORD=your_secure_admin_password
NEXT_PUBLIC_WHATSAPP_NUMBER=94771234567
```

**Where to find Supabase keys:**
1. Go to [supabase.com](https://supabase.com) and create a free project
2. Open **Project Settings → API**
3. Copy **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
4. Copy **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Set up the database

In your Supabase dashboard, open **SQL Editor** and run:

1. `database/schema.sql` — creates all tables
2. `database/seed.sql` — inserts 4 sample products

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── products/           # Products listing & detail
│   ├── cart/               # Cart page
│   ├── checkout/           # Checkout & success
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── admin/              # Admin dashboard
│   └── api/                # API routes
├── components/
│   ├── ui/                 # Button, Badge, ProductCard, etc.
│   ├── layout/             # Navbar, Footer, CartDrawer
│   ├── sections/           # Homepage sections
│   └── admin/              # Admin components
├── lib/                    # Supabase client, cart context
├── types/                  # TypeScript interfaces
├── utils/                  # Formatting, WhatsApp helpers
├── database/               # SQL schema & seed data
├── public/images/          # Static images (logo, products, backgrounds)
└── assets/                 # Source assets folder (copy to public/images)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/products` | Product catalog |
| `/products/[slug]` | Product detail page |
| `/cart` | Full cart page |
| `/checkout` | Checkout form |
| `/checkout/success` | Order confirmation |
| `/about` | Brand story |
| `/contact` | Contact form |
| `/admin` | Admin dashboard |

## Admin Dashboard

Visit `/admin` and log in with the password set in `ADMIN_PASSWORD`.

Features:
- Dashboard stats (orders, revenue, products)
- View and update order status
- View contact messages
- Add, edit, and delete products

## Deploy to Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables from `.env.local`
4. Deploy

## Brand Colors

| Color | Hex |
|-------|-----|
| Peanut Yellow | `#F6B51E` |
| Cream | `#FDF4E3` |
| Chocolate Brown | `#5E2F11` |
| Purple | `#6B3FA0` |
| Green | `#2D8A6E` |
| Blue | `#3B9EC9` |
| Pink | `#E8756A` |

## License

Private — Pnutty © 2026
