"use client";

import Link from "next/link";
import { useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import ProductImage from "./ProductImage";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/types";
import { formatPriceNumber, cn } from "@/utils/format";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

const bgColors = [
  "bg-green-soft",
  "bg-blue-soft",
  "bg-pink-soft",
  "bg-peanut-light/30",
];

const ringColors = [
  "ring-green/15",
  "ring-blue/15",
  "ring-pink/15",
  "ring-peanut/25",
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

  const displayName = product.name
    .replace("Peanut Butter ", "")
    .replace("Classic ", "Classic ")
    .replace("Choco ", "Choco ");

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card-lg bg-white shadow-card ring-1 ring-chocolate/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-card-hover",
        className
      )}
    >
      {product.badge && (
        <div className="absolute left-4 top-4 z-10">
          <Badge variant="default" className="shadow-sm">
            {product.badge}
          </Badge>
        </div>
      )}

      <Link
        href={`/products/${product.slug}`}
        className={cn(
          "relative flex items-center justify-center overflow-hidden p-6 pb-4 transition-colors sm:p-8",
          bgColors[bgIndex],
          ringColors[bgIndex],
          "ring-inset"
        )}
      >
        <div className="relative h-52 w-full min-h-[220px] transition-transform duration-500 ease-out group-hover:scale-105 sm:min-h-[240px] md:min-h-[260px]">
          <ProductImage
            product={product}
            className="drop-shadow-2xl"
            sizes="(max-width: 768px) 50vw, 280px"
            priority={bgIndex === 0}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3.5 p-5 sm:gap-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="chocolate">{product.category}</Badge>
          <Badge variant="default">{product.texture}</Badge>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-lg font-bold leading-snug text-chocolate transition-colors duration-200 group-hover:text-chocolate-light sm:text-xl">
            {displayName}
          </h3>
        </Link>

        {variant !== "compact" && (
          <p className="line-clamp-2 text-sm leading-relaxed text-chocolate/65">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-chocolate/50">
              {product.size} · LKR
            </p>
            <p className="font-display text-2xl font-bold text-chocolate sm:text-[1.65rem]">
              {formatPriceNumber(product.price)}
            </p>
          </div>

          <div className="flex items-center rounded-full border border-chocolate/12 bg-cream shadow-sm">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-chocolate transition-colors hover:bg-peanut/25"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-bold">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-chocolate transition-colors hover:bg-peanut/25"
              aria-label="Increase quantity"
            >
              +
            </button>
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
