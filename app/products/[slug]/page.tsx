import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import { getProductBySlug, getProducts } from "@/lib/supabase";
import { formatPriceNumber } from "@/utils/format";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image_url],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const bgClass =
    product.category === "Classic" && product.texture === "Crunchy"
      ? "bg-green/10"
      : product.category === "Choco" && product.texture === "Crunchy"
        ? "bg-blue/10"
        : product.category === "Choco" && product.texture === "Creamy"
          ? "bg-pink/10"
          : "bg-peanut/10";

  return (
    <div className="pt-24">
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`relative flex items-center justify-center rounded-card p-12 ${bgClass}`}
            >
              {product.badge && (
                <div className="absolute left-6 top-6">
                  <Badge>{product.badge}</Badge>
                </div>
              )}
              <div className="relative h-72 w-72 md:h-96 md:w-96">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="chocolate">{product.category}</Badge>
                <Badge variant="default">{product.texture}</Badge>
              </div>

              <h1 className="font-display text-4xl font-bold text-chocolate md:text-5xl">
                {product.name}
              </h1>

              <p className="text-lg leading-relaxed text-chocolate/70">
                {product.description}
              </p>

              <div>
                <p className="text-sm text-chocolate/60">
                  {product.size} · LKR
                </p>
                <p className="font-display text-4xl font-bold text-chocolate">
                  {formatPriceNumber(product.price)}
                </p>
              </div>

              <ProductDetailClient product={product} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
