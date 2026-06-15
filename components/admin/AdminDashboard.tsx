"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import type { Product, OrderWithItems, ContactMessage } from "@/types";
import { formatPriceNumber } from "@/utils/format";

type Tab = "dashboard" | "orders" | "messages" | "products";

const emptyProduct: Partial<Product> = {
  name: "",
  slug: "",
  category: "Classic",
  texture: "Crunchy",
  description: "",
  price: 1290,
  size: "300g",
  image_url: "/images/classic-crunchy.png",
  badge: "",
  is_active: true,
};

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState<Tab>("dashboard");
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/orders?password=${encodeURIComponent(password)}`);
      if (!res.ok) throw new Error("Unauthorized");
      const data = await res.json();
      setOrders(data.orders ?? []);
      setMessages(data.messages ?? []);
      setProducts(data.products ?? []);
    } catch {
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    if (authenticated) fetchData();
  }, [authenticated, fetchData]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setAuthenticated(true);
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, orderId, status }),
    });
    fetchData();
  };

  const saveProduct = async (e: FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    const method = editingProduct.id ? "PUT" : "POST";
    await fetch("/api/products", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, product: editingProduct }),
    });

    setShowProductForm(false);
    setEditingProduct(null);
    fetchData();
  };

  const deleteProduct = async (productId: string) => {
    if (!confirm("Delete this product?")) return;
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, productId }),
    });
    fetchData();
  };

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter((o) => o.status === "pending").length,
    totalRevenue: orders.reduce((sum, o) => sum + Number(o.total), 0),
    totalProducts: products.length,
  };

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream pt-16">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-card bg-white p-8 shadow-xl"
        >
          <h1 className="mb-6 font-display text-2xl font-bold text-chocolate">
            Pnutty Admin
          </h1>
          <label className="mb-1 block text-sm font-semibold">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 outline-none focus:border-peanut"
          />
          <Button type="submit" variant="primary" className="w-full">
            Login
          </Button>
        </form>
      </div>
    );
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "orders", label: "Orders" },
    { id: "messages", label: "Messages" },
    { id: "products", label: "Products" },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-3xl font-bold text-chocolate">
            Admin Dashboard
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setAuthenticated(false);
              setPassword("");
            }}
          >
            Logout
          </Button>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === t.id
                  ? "bg-chocolate text-cream"
                  : "bg-white text-chocolate hover:bg-peanut/20"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {loading && <p className="text-chocolate/60">Loading...</p>}

        {tab === "dashboard" && !loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Orders", value: stats.totalOrders },
              { label: "Pending Orders", value: stats.pendingOrders },
              {
                label: "Total Revenue",
                value: `LKR ${formatPriceNumber(stats.totalRevenue)}`,
              },
              { label: "Total Products", value: stats.totalProducts },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-card bg-white p-6 shadow-md"
              >
                <p className="text-sm text-chocolate/60">{stat.label}</p>
                <p className="font-display text-3xl font-bold text-chocolate">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {tab === "orders" && !loading && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-chocolate/60">No orders yet.</p>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-card bg-white p-6 shadow-md"
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-display font-bold text-chocolate">
                        {order.customer_name}
                      </p>
                      <p className="text-sm text-chocolate/60">
                        {order.phone} · {order.email}
                      </p>
                      <p className="text-sm text-chocolate/60">
                        {order.address}, {order.city}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-bold">
                        LKR {formatPriceNumber(Number(order.total))}
                      </p>
                      <p className="text-xs text-chocolate/50">
                        {new Date(order.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <ul className="mb-4 space-y-1 text-sm">
                    {order.order_items?.map((item) => (
                      <li key={item.id}>
                        {item.product_name} x{item.quantity} — LKR{" "}
                        {formatPriceNumber(Number(item.subtotal))}
                      </li>
                    ))}
                  </ul>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
                    }
                    className="rounded-xl border border-chocolate/20 bg-cream px-4 py-2 text-sm"
                  >
                    {["pending", "confirmed", "shipped", "delivered", "cancelled"].map(
                      (s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      )
                    )}
                  </select>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "messages" && !loading && (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-chocolate/60">No messages yet.</p>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className="rounded-card bg-white p-6 shadow-md"
                >
                  <div className="mb-2 flex justify-between">
                    <p className="font-display font-bold">{msg.name}</p>
                    <p className="text-xs text-chocolate/50">
                      {new Date(msg.created_at).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm text-chocolate/60">
                    {msg.email}
                    {msg.phone && ` · ${msg.phone}`}
                  </p>
                  <p className="mt-2 text-sm">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "products" && !loading && (
          <div>
            <Button
              variant="primary"
              size="sm"
              className="mb-6"
              onClick={() => {
                setEditingProduct({ ...emptyProduct });
                setShowProductForm(true);
              }}
            >
              Add Product
            </Button>

            {showProductForm && editingProduct && (
              <form
                onSubmit={saveProduct}
                className="mb-8 rounded-card bg-white p-6 shadow-md"
              >
                <h3 className="mb-4 font-display text-lg font-bold">
                  {editingProduct.id ? "Edit Product" : "New Product"}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      ["name", "Name"],
                      ["slug", "Slug"],
                      ["category", "Category"],
                      ["texture", "Texture"],
                      ["description", "Description"],
                      ["price", "Price"],
                      ["size", "Size"],
                      ["image_url", "Image URL"],
                      ["badge", "Badge"],
                    ] as const
                  ).map(([key, label]) => (
                    <div key={key}>
                      <label className="mb-1 block text-sm font-semibold">
                        {label}
                      </label>
                      <input
                        type={key === "price" ? "number" : "text"}
                        value={String(editingProduct[key] ?? "")}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            [key]:
                              key === "price"
                                ? Number(e.target.value)
                                : e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-2 text-sm outline-none focus:border-peanut"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <Button type="submit" variant="primary" size="sm">
                    Save
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setShowProductForm(false);
                      setEditingProduct(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-card bg-white p-4 shadow-md"
                >
                  <div>
                    <p className="font-display font-bold">{product.name}</p>
                    <p className="text-sm text-chocolate/60">
                      {product.category} · {product.texture} · LKR{" "}
                      {formatPriceNumber(product.price)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setEditingProduct(product);
                        setShowProductForm(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
