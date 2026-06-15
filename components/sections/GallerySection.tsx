import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryItems = [
  {
    src: "/images/classic-crunchy.png",
    label: "Classic Crunchy",
    bg: "bg-green/20",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/choco-crunchy.png",
    label: "Choco Crunchy",
    bg: "bg-blue/20",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/choco-creamy.png",
    label: "Choco Creamy",
    bg: "bg-pink/20",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/classic-creamy.png",
    label: "Classic Creamy",
    bg: "bg-peanut/20",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/classic-crunchy.png",
    label: "Spread the Joy",
    bg: "bg-purple/20",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/choco-creamy.png",
    label: "Made in Sri Lanka",
    bg: "bg-turquoise/20",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="@pnutty.lk"
          title="From the Pnutty feed"
          subtitle="Follow us on Instagram for recipes, drops, and nutty vibes."
        />

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className={`group relative overflow-hidden rounded-card ${item.bg} ${item.span} shadow-md transition-all duration-300 hover:shadow-xl`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center bg-chocolate/0 p-4 transition-all duration-300 group-hover:bg-chocolate/60">
                <span className="translate-y-4 font-display text-lg font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://instagram.com/pnutty.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg font-semibold text-chocolate underline decoration-peanut decoration-2 underline-offset-4 transition-colors hover:text-peanut"
          >
            Follow us →
          </Link>
        </div>
      </div>
    </section>
  );
}
