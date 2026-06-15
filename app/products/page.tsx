import type { Metadata } from "next";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProducts } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Shop all Pnutty peanut butter flavours — Classic and Choco, Crunchy and Creamy. Made fresh in Sri Lanka.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="pt-24">
      <section className="pattern-yellow-fallback relative py-16 md:py-24">
        <div className="pattern-yellow absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            badge="Shop"
            title="All Pnutty Jars"
            subtitle="Four flavours. Two textures. One brand you'll love."
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
