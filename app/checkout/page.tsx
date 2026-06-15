"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCart } from "@/lib/cart-context";
import { formatPriceNumber } from "@/utils/format";
import {
  generateWhatsAppOrderMessage,
  getWhatsAppUrl,
} from "@/utils/whatsapp";
import type { CheckoutFormData } from "@/types";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState<CheckoutFormData>({
    customer_name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    notes: "",
  });

  if (items.length === 0 && status !== "success") {
    return (
      <div className="pt-24">
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <span className="mb-4 block text-6xl">🥜</span>
            <h1 className="mb-4 font-display text-3xl font-bold text-chocolate">
              Nothing to checkout
            </h1>
            <Button href="/products" variant="primary">
              Shop Products
            </Button>
          </div>
        </section>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          items: items.map((item) => ({
            product_id: item.product.id,
            product_name: item.product.name,
            quantity: item.quantity,
            price: item.product.price,
            subtotal: item.product.price * item.quantity,
          })),
          total: subtotal,
        }),
      });

      if (!res.ok) throw new Error("Order failed");

      const whatsappMessage = generateWhatsAppOrderMessage(items, formData);
      const whatsappUrl = getWhatsAppUrl(whatsappMessage);

      clearCart();
      setStatus("success");

      window.open(whatsappUrl, "_blank");
      router.push("/checkout/success");
    } catch {
      setStatus("idle");
      alert("Order failed. Please try again or order via WhatsApp.");
    }
  };

  return (
    <div className="pt-24">
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <SectionHeading badge="Checkout" title="Almost there!" />

          <div className="grid gap-8 lg:grid-cols-5">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-card bg-white p-8 shadow-lg lg:col-span-3"
            >
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Full Name *
                </label>
                <input
                  required
                  value={formData.customer_name}
                  onChange={(e) =>
                    setFormData({ ...formData, customer_name: e.target.value })
                  }
                  className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 outline-none focus:border-peanut"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Phone *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 outline-none focus:border-peanut"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 outline-none focus:border-peanut"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-chocolate/20 bg-cream px-4 py-3 outline-none focus:border-peanut"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  City *
                </label>
                <input
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 outline-none focus:border-peanut"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Order Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-chocolate/20 bg-cream px-4 py-3 outline-none focus:border-peanut"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Placing Order..."
                  : "Place Order & WhatsApp Us"}
              </Button>
            </form>

            <div className="rounded-card bg-white p-8 shadow-lg lg:col-span-2">
              <h3 className="mb-4 font-display text-xl font-bold">
                Order Summary
              </h3>
              <ul className="mb-6 space-y-3">
                {items.map((item) => (
                  <li
                    key={item.product.id}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.product.name} x{item.quantity}
                    </span>
                    <span className="font-semibold">
                      LKR{" "}
                      {formatPriceNumber(
                        item.product.price * item.quantity
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-chocolate/10 pt-4">
                <div className="flex justify-between font-display text-xl font-bold">
                  <span>Total</span>
                  <span>LKR {formatPriceNumber(subtotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
