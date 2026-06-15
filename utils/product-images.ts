import type { Product } from "@/types";

/** Canonical local product image paths (source of truth). */
export const PRODUCT_IMAGE_BY_SLUG: Record<string, string> = {
  "classic-peanut-butter-crunchy": "/images/classic-crunchy.png",
  "choco-peanut-butter-crunchy": "/images/choco-crunchy.png",
  "choco-peanut-butter-creamy": "/images/choco-creamy.png",
  "classic-peanut-butter-creamy": "/images/classic-creamy.png",
};

export function resolveProductImage(
  product: Pick<Product, "slug" | "image_url">
): string {
  if (PRODUCT_IMAGE_BY_SLUG[product.slug]) {
    return PRODUCT_IMAGE_BY_SLUG[product.slug];
  }

  const url = product.image_url?.trim() ?? "";
  if (!url) return "/images/classic-crunchy.png";

  // Never use Windows absolute paths in the browser
  if (url.includes(":\\") || url.includes("assets\\img")) {
    const file = url.split(/[/\\]/).pop() ?? "";
    const normalized = file
      .replace("classic_cruncy", "classic-crunchy")
      .replace("choco_curncy", "choco-crunchy")
      .replace("-removebg-preview", "")
      .replace(/_/g, "-");
    return `/images/${normalized}`;
  }

  if (url.startsWith("/images/")) return url;
  if (url.startsWith("images/")) return `/${url}`;

  return `/images/${url.replace(/^\//, "")}`;
}

export function withResolvedProductImage(product: Product): Product {
  return {
    ...product,
    image_url: resolveProductImage(product),
  };
}

export function withResolvedProductImages(products: Product[]): Product[] {
  return products.map(withResolvedProductImage);
}
