"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCart } from "@/lib/cart-context";
import { formatPriceNumber } from "@/utils/format";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  return (
    <div className="pt-24">
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <SectionHeading badge="Cart" title="Your nutty haul" />

          {items.length === 0 ? (
            <div className="rounded-card bg-white p-12 text-center shadow-lg">
              <span className="mb-4 block text-6xl">🥜</span>
              <p className="mb-6 font-display text-xl font-semibold text-chocolate">
                Your cart is feeling empty.
              </p>
              <Button href="/products" variant="primary">
                Shop Now
              </Button>
            </div>
          ) : (
            <>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.product.id}
                    className="flex flex-col gap-4 rounded-card bg-white p-6 shadow-md sm:flex-row sm:items-center"
                  >
                    <div className="relative h-24 w-24 shrink-0">
                      <Image
                        src={item.product.image_url}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-display text-lg font-bold text-chocolate hover:text-peanut"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-chocolate/60">
                        LKR {formatPriceNumber(item.product.price)} each
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center rounded-full border border-chocolate/20">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center"
                        >
                          −
                        </button>
                        <span className="w-9 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <p className="min-w-[100px] text-right font-display font-bold text-chocolate">
                        LKR{" "}
                        {formatPriceNumber(
                          item.product.price * item.quantity
                        )}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id)}
                        className="text-sm text-pink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-card bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl font-bold text-chocolate">
                    LKR {formatPriceNumber(subtotal)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button href="/checkout" variant="primary" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
