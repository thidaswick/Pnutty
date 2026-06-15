import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Product } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured =
  supabaseUrl.length > 0 &&
  supabaseAnonKey.length > 0 &&
  !supabaseUrl.includes("your_supabase");

let supabaseInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseInstance;
}

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Classic Peanut Butter Crunchy",
    slug: "classic-peanut-butter-crunchy",
    category: "Classic",
    texture: "Crunchy",
    description:
      "Roasted peanuts with real crunchy bits. Pure, simple, addictive.",
    price: 1290,
    size: "300g",
    image_url: "/images/classic-crunchy.png",
    badge: "Best Seller",
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Choco Peanut Butter Crunchy",
    slug: "choco-peanut-butter-crunchy",
    category: "Choco",
    texture: "Crunchy",
    description:
      "Sweet cocoa swirl meets crunchy roasted peanuts. Dessert in a jar.",
    price: 1490,
    size: "300g",
    image_url: "/images/choco-crunchy.png",
    badge: "New",
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Choco Peanut Butter Creamy",
    slug: "choco-peanut-butter-creamy",
    category: "Choco",
    texture: "Creamy",
    description:
      "Silky chocolate peanut blend. Spoon it, spread it, blend it.",
    price: 1490,
    size: "300g",
    image_url: "/images/choco-creamy.png",
    badge: "Fan Favourite",
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Classic Peanut Butter Creamy",
    slug: "classic-peanut-butter-creamy",
    category: "Classic",
    texture: "Creamy",
    description:
      "Velvety smooth peanut butter. Perfect on toast, toast, and toast.",
    price: 1290,
    size: "300g",
    image_url: "/images/classic-creamy.png",
    badge: null,
    is_active: true,
    created_at: new Date().toISOString(),
  },
];

export async function getProducts(): Promise<Product[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return FALLBACK_PRODUCTS;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (error || !data?.length) return FALLBACK_PRODUCTS;
  return data as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return FALLBACK_PRODUCTS.find((p) => p.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error || !data) {
    return FALLBACK_PRODUCTS.find((p) => p.slug === slug) ?? null;
  }
  return data as Product;
}

export async function getProductById(id: string): Promise<Product | null> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return FALLBACK_PRODUCTS.find((p) => p.id === id) ?? null;
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return FALLBACK_PRODUCTS.find((p) => p.id === id) ?? null;
  }
  return data as Product;
}

export async function getAllProductsAdmin(): Promise<Product[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return FALLBACK_PRODUCTS;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: true });

  if (error || !data) return FALLBACK_PRODUCTS;
  return data as Product[];
}
