import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { slugify } from "@/utils/format";
import type { Product } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, product } = body as {
      password: string;
      product: Partial<Product>;
    };

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const slug = product.slug || slugify(product.name ?? "");

    const { data, error } = await supabase
      .from("products")
      .insert({
        name: product.name,
        slug,
        category: product.category,
        texture: product.texture,
        description: product.description,
        price: product.price,
        size: product.size,
        image_url: product.image_url,
        badge: product.badge,
        is_active: product.is_active ?? true,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ product: data });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { password, product } = body as {
      password: string;
      product: Product;
    };

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const { data, error } = await supabase
      .from("products")
      .update({
        name: product.name,
        slug: product.slug,
        category: product.category,
        texture: product.texture,
        description: product.description,
        price: product.price,
        size: product.size,
        image_url: product.image_url,
        badge: product.badge,
        is_active: product.is_active,
      })
      .eq("id", product.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ product: data });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { password, productId } = body;

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", productId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
