export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  texture: string;
  description: string;
  price: number;
  size: string;
  image_url: string;
  badge: string | null;
  is_active: boolean;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes: string | null;
  total: number;
  status: OrderStatus;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
}

export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";

export interface CheckoutFormData {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface AdminStats {
  totalOrders: number;
  pendingOrders: number;
  totalRevenue: number;
  totalProducts: number;
}

export interface OrderWithItems extends Order {
  order_items: OrderItem[];
}
