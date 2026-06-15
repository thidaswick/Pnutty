import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

/** Hero jar images — removebg previews copied to public/images/ via npm run copy-assets */
const heroProducts = [
  {
    src: "/images/classic-crunchy.png",
    label: "Classic · Crunchy",
    rotate: "-4deg",
    offset: "lg:translate-y-2",
  },
  {
    src: "/images/choco-crunchy.png",
    label: "Choco · Crunchy",
    rotate: "3deg",
    offset: "lg:-translate-y-4 lg:translate-x-2",
  },
  {
    src: "/images/choco-creamy.png",
    label: "Choco · Creamy",
    rotate: "-2deg",
    offset: "lg:-translate-y-6",
  },
  {
    src: "/images/classic-creamy.png",
    label: "Classic · Creamy",
    rotate: "5deg",
    offset: "lg:translate-y-0 lg:translate-x-1",
  },
];

const marqueeItems = [
  "★ Crunchy",
  "★ Creamy",
  "★ Classic",
  "★ Choco",
  "★ 100% Natural",
  "★ Made in Sri Lanka",
  "★ Spread the Nutty Goodness",
];

function HeroProductCard({
  src,
  label,
  rotate,
  offset = "",
  className = "",
}: {
  src: string;
  label: string;
  rotate: string;
  offset?: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} ${offset}`}
      style={{ "--rotate": rotate } as React.CSSProperties}
    >
      <div className="group flex aspect-square flex-col items-center justify-center rounded-[1.75rem] bg-cream p-4 shadow-card ring-1 ring-chocolate/8 transition-transform duration-500 hover:scale-[1.03] sm:rounded-[2rem] sm:p-5 md:p-6">
        <div className="relative h-full w-full flex-1">
          <Image
            src={src}
            alt={label}
            fill
            unoptimized
            className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 40vw, 220px"
          />
        </div>
        <p className="mt-2 shrink-0 text-center font-display text-xs font-bold text-chocolate sm:text-sm">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-hero-yellow-fallback relative overflow-hidden">
      <div className="bg-hero-yellow absolute inset-0 opacity-70" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-peanut-light/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-peanut-dark/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-28 sm:px-6 md:pt-32 lg:px-8 lg:pb-10 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="animate-fade-in-up space-y-6 sm:space-y-8 lg:max-w-xl">
            <Badge
              variant="cream"
              className="border-chocolate/10 bg-white/75 px-4 py-1.5 text-[11px] shadow-sm backdrop-blur-sm"
            >
              Introducing Pnutty
            </Badge>

            <h1 className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]">
              <span className="text-shadow-hero-cream block text-cream">
                Spread the
              </span>
              <span className="text-shadow-chocolate block text-chocolate">
                Nutty
              </span>
              <span className="text-shadow-hero-cream block text-cream">
                Goodness
              </span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-chocolate/90 sm:text-lg sm:leading-relaxed">
              Premium peanut butter made for every mood — crunchy, creamy,
              classic, and choco. Roasted, blended, and jarred with love in Sri
              Lanka.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/products" variant="primary" size="lg">
                Shop Now
              </Button>
              <Button href="/#products" variant="secondary" size="lg">
                Explore Flavours →
              </Button>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1 sm:gap-3">
              {["100% Natural", "Premium Roast", "Made with Love"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-chocolate/10 bg-white/60 px-3.5 py-1.5 text-xs font-bold text-chocolate shadow-sm backdrop-blur-sm sm:px-4 sm:text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Product jar collage — 2×2 cream cards (reference layout) */}
          <div className="mx-auto w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {heroProducts.map((product, index) => (
                <HeroProductCard
                  key={product.src}
                  src={product.src}
                  label={product.label}
                  rotate={product.rotate}
                  offset={product.offset}
                  className={
                    index === 1
                      ? "animate-float-delayed"
                      : index === 2
                        ? "animate-float-slow"
                        : index === 3
                          ? "animate-float-reverse"
                          : "animate-float"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee tape band */}
      <div className="relative overflow-hidden bg-chocolate py-4">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-2 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='8' viewBox='0 0 40 8'%3E%3Cpath d='M0 4 Q10 0 20 4 T40 4' stroke='%23F6B51E' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "40px 8px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='8' viewBox='0 0 40 8'%3E%3Cpath d='M0 4 Q10 8 20 4 T40 4' stroke='%23F6B51E' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "40px 8px",
          }}
        />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={`${item}-${i}`}
                className="mx-8 font-display text-sm font-bold tracking-wide text-cream"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="relative -mb-px h-8 overflow-hidden sm:h-10">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48V24C240 0 480 0 720 24C960 48 1200 48 1440 24V48H0Z"
            fill="#fdf4e3"
          />
        </svg>
      </div>
    </section>
  );
}
