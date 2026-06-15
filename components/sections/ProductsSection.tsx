import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProducts } from "@/lib/supabase";
import type { Product } from "@/types";

export default async function ProductsSection() {
  let products: Product[] = [];
  try {
    products = await getProducts();
  } catch {
    products = [];
  }

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Our Range"
          title="Four Jars. Endless Mood."
          subtitle="Made fresh, never compromised. Pick your nutty match below."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
