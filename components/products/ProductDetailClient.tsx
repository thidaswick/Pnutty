"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/types";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border-2 border-chocolate/20 bg-cream">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-12 w-12 items-center justify-center text-xl font-bold text-chocolate transition-colors hover:bg-peanut/20"
          >
            −
          </button>
          <span className="w-12 text-center text-lg font-bold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-12 w-12 items-center justify-center text-xl font-bold text-chocolate transition-colors hover:bg-peanut/20"
          >
            +
          </button>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        onClick={() => addItem(product, quantity)}
      >
        Add to Cart
      </Button>
    </div>
  );
}
