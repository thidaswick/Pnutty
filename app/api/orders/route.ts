import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

interface OrderItemInput {
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  subtotal: number;
}

interface OrderInput {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes?: string;
  total: number;
  items: OrderItemInput[];
}

export async function POST(request: Request) {
  try {
    const body: OrderInput = await request.json();

    if (
      !body.customer_name ||
      !body.phone ||
      !body.email ||
      !body.address ||
      !body.city ||
      !body.items?.length
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    if (!supabase) {
      return NextResponse.json({
        success: true,
        message: "Order recorded locally (Supabase not configured)",
      });
    }

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        customer_name: body.customer_name,
        phone: body.phone,
        email: body.email,
        address: body.address,
        city: body.city,
        notes: body.notes || null,
        total: body.total,
        status: "pending",
      })
      .select()
      .single();

    if (orderError || !order) {
      console.error("Order insert error:", orderError);
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 }
      );
    }

    const orderItems = body.items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      product_name: item.product_name,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.subtotal,
    }));

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItems);

    if (itemsError) {
      console.error("Order items insert error:", itemsError);
      return NextResponse.json(
        { error: "Failed to save order items" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, orderId: order.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ orders: [], messages: [], products: [] });
  }

  const [ordersRes, messagesRes, productsRes] = await Promise.all([
    supabase
      .from("orders")
      .select("*, order_items(*)")
      .order("created_at", { ascending: false }),
    supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase.from("products").select("*").order("created_at"),
  ]);

  return NextResponse.json({
    orders: ordersRes.data ?? [],
    messages: messagesRes.data ?? [],
    products: productsRes.data ?? [],
  });
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { password, orderId, status } = body;

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const { error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", orderId);

    if (error) {
      return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
