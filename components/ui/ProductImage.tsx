"use client";

import Image from "next/image";
import { resolveProductImage } from "@/utils/product-images";
import type { Product } from "@/types";
import { cn } from "@/utils/format";

interface ProductImageProps {
  product: Pick<Product, "slug" | "image_url" | "name">;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ProductImage({
  product,
  className,
  sizes = "(max-width: 768px) 50vw, 25vw",
  priority = false,
  fill = true,
  width,
  height,
}: ProductImageProps) {
  const src = resolveProductImage(product);

  return (
    <Image
      src={src}
      alt={product.name}
      fill={fill && !width}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={cn("object-contain", className)}
      sizes={sizes}
    />
  );
}
