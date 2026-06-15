"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";
import { formatPriceNumber, cn } from "@/utils/format";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-chocolate/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out sm:max-w-lg",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-chocolate/10 p-6">
          <h2 className="font-display text-2xl font-bold text-chocolate">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full text-chocolate transition-colors hover:bg-peanut/20"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <span className="text-5xl">🥜</span>
              <p className="font-display text-lg font-semibold text-chocolate">
                Your cart is feeling empty.
              </p>
              <p className="text-chocolate/60">
                Add a jar to spread the joy.
              </p>
              <Button href="/products" variant="primary" onClick={closeCart}>
                Shop Now
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4 rounded-card-lg bg-white p-4 shadow-sm ring-1 ring-chocolate/5"
                >
                  <div className="relative h-20 w-20 shrink-0">
                    <Image
                      src={item.product.image_url}
                      alt={item.product.name}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="font-display text-sm font-bold text-chocolate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-chocolate/60">
                      LKR {formatPriceNumber(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-chocolate/20">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center text-sm"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-sm">
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
                          className="flex h-7 w-7 items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id)}
                        className="text-sm text-pink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-chocolate/10 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-chocolate">
                Subtotal
              </span>
              <span className="font-display text-xl font-bold text-chocolate">
                LKR {formatPriceNumber(subtotal)}
              </span>
            </div>
            <Button
              href="/checkout"
              variant="primary"
              className="w-full"
              onClick={closeCart}
            >
              Checkout →
            </Button>
            <Link
              href="/cart"
              onClick={closeCart}
              className="mt-3 block text-center text-sm text-chocolate/60 hover:text-chocolate"
            >
              View full cart
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
