import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryItems = [
  {
    src: "/images/p1.jpg",
    label: "Pnutty life",
    bg: "bg-peanut-light/30",
    span: "col-span-1 row-span-2",
    fit: "cover" as const,
  },
  {
    src: "/images/v1.jpg",
    label: "Spread the joy",
    bg: "bg-green-soft",
    span: "col-span-1 row-span-1",
    fit: "cover" as const,
  },
  {
    src: "/images/classic-crunchy.png",
    label: "Classic Crunchy",
    bg: "bg-cream",
    span: "col-span-1 row-span-1",
    fit: "contain" as const,
  },
  {
    src: "/images/v2.jpg",
    label: "Nutty vibes",
    bg: "bg-blue-soft",
    span: "col-span-1 row-span-1",
    fit: "cover" as const,
  },
  {
    src: "/images/choco-creamy.png",
    label: "Choco Creamy",
    bg: "bg-pink-soft",
    span: "col-span-1 row-span-1",
    fit: "contain" as const,
  },
  {
    src: "/images/v3.jpg",
    label: "Made in Sri Lanka",
    bg: "bg-purple/15",
    span: "col-span-1 row-span-1",
    fit: "cover" as const,
  },
  {
    src: "/images/v4.jpg",
    label: "@pnutty.lk",
    bg: "bg-peanut/20",
    span: "col-span-2 row-span-1 md:col-span-1",
    fit: "cover" as const,
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="@pnutty.lk"
          title="From the Pnutty feed"
          subtitle="Follow us on Instagram for recipes, drops, and nutty vibes."
        />

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className={`group relative overflow-hidden rounded-card-lg ${item.bg} ${item.span} shadow-card ring-1 ring-chocolate/5 transition-all duration-400 hover:-translate-y-1 hover:shadow-card-hover`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className={
                    item.fit === "cover"
                      ? "object-cover transition-transform duration-500 group-hover:scale-105"
                      : "object-contain p-4 transition-transform duration-500 group-hover:scale-110 sm:p-5"
                  }
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-chocolate/75 via-chocolate/25 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="translate-y-3 font-display text-sm font-bold text-white transition-transform duration-300 group-hover:translate-y-0 sm:text-base">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://instagram.com/pnutty.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-base font-bold text-chocolate underline decoration-peanut decoration-2 underline-offset-4 transition-colors hover:text-peanut sm:text-lg"
          >
            Follow us →
          </Link>
        </div>
      </div>
    </section>
  );
}
