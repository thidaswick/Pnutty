"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/types";
import { formatPriceNumber, cn } from "@/utils/format";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

const bgColors = [
  "bg-green/10",
  "bg-blue/10",
  "bg-pink/10",
  "bg-peanut/10",
];

export default function ProductCard({
  product,
  variant = "default",
  className,
}: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const bgIndex =
    product.category === "Classic" && product.texture === "Crunchy"
      ? 0
      : product.category === "Choco" && product.texture === "Crunchy"
        ? 1
        : product.category === "Choco" && product.texture === "Creamy"
          ? 2
          : 3;

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
        className
      )}
    >
      {product.badge && (
        <div className="absolute left-4 top-4 z-10">
          <Badge variant="default">{product.badge}</Badge>
        </div>
      )}

      <Link
        href={`/products/${product.slug}`}
        className={cn(
          "relative flex items-center justify-center p-6 transition-colors",
          bgColors[bgIndex]
        )}
      >
        <div className="relative h-48 w-48 transition-transform duration-500 group-hover:scale-110 md:h-56 md:w-56">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain drop-shadow-xl"
            sizes="(max-width: 768px) 192px, 224px"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="chocolate">{product.category}</Badge>
          <Badge variant="default">{product.texture}</Badge>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-xl font-bold text-chocolate transition-colors hover:text-peanut">
            {product.name.replace("Peanut Butter ", "")}
          </h3>
        </Link>

        {variant !== "compact" && (
          <p className="line-clamp-2 text-sm text-chocolate/70">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-chocolate/60">
              {product.size} · LKR
            </p>
            <p className="font-display text-2xl font-bold text-chocolate">
              {formatPriceNumber(product.price)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-chocolate/20 bg-cream">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full text-chocolate transition-colors hover:bg-peanut/20"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-semibold">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-chocolate transition-colors hover:bg-peanut/20"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          size="sm"
          className="w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
