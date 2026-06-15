import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const floatingProducts = [
  {
    src: "/images/classic-crunchy.png",
    label: "Classic · Crunchy",
    bg: "bg-white/80",
    ring: "ring-chocolate/10",
    rotate: "-10deg",
    top: "top-2",
    left: "left-[2%]",
    z: "z-10",
    anim: "animate-float",
    size: "h-44 w-44 md:h-48 md:w-48",
  },
  {
    src: "/images/choco-crunchy.png",
    label: "Choco · Crunchy",
    bg: "bg-white/85",
    ring: "ring-chocolate/10",
    rotate: "6deg",
    top: "top-[14%]",
    left: "left-[40%]",
    z: "z-30",
    anim: "animate-float-delayed",
    size: "h-48 w-48 md:h-52 md:w-52",
  },
  {
    src: "/images/choco-creamy.png",
    label: "Choco · Creamy",
    bg: "bg-white/80",
    ring: "ring-chocolate/10",
    rotate: "-5deg",
    top: "top-[46%]",
    left: "left-[4%]",
    z: "z-20",
    anim: "animate-float-slow",
    size: "h-40 w-40 md:h-44 md:w-44",
  },
  {
    src: "/images/classic-creamy.png",
    label: "Classic · Creamy",
    bg: "bg-white/85",
    ring: "ring-chocolate/10",
    rotate: "8deg",
    top: "top-[52%]",
    left: "left-[44%]",
    z: "z-10",
    anim: "animate-float-reverse",
    size: "h-40 w-40 md:h-44 md:w-44",
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

export default function HeroSection() {
  return (
    <section className="bg-hero-yellow-fallback relative overflow-hidden">
      <div className="bg-hero-yellow absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-28 sm:px-6 md:pt-32 lg:px-8 lg:pb-10 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-8 xl:gap-12">
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

          {/* Desktop: floating product jar collage */}
          <div className="relative hidden h-[540px] lg:block xl:h-[580px]">
            {floatingProducts.map((product) => (
              <div
                key={product.src}
                className={`absolute ${product.top} ${product.left} ${product.z} ${product.anim}`}
                style={
                  {
                    "--rotate": product.rotate,
                    transform: `rotate(${product.rotate})`,
                  } as React.CSSProperties
                }
              >
                <div
                  className={`group rounded-card-lg ${product.bg} ring-1 ${product.ring} p-3 shadow-card backdrop-blur-sm transition-all duration-500 hover:scale-[1.05] hover:shadow-card-hover md:p-4`}
                >
                  <div className={`relative ${product.size} mx-auto`}>
                    <Image
                      src={product.src}
                      alt={product.label}
                      fill
                      className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1280px) 192px, 208px"
                      priority
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-bold tracking-wide text-chocolate">
                    {product.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / tablet: variations hero image + product strip */}
          <div className="space-y-4 lg:hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card-lg shadow-card ring-1 ring-chocolate/10 sm:aspect-[16/10]">
              <Image
                src="/images/pnutty-variations.jpg"
                alt="Pnutty peanut butter variations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {floatingProducts.map((product) => (
                <div
                  key={product.src}
                  className="rounded-xl bg-white/70 p-1.5 shadow-sm ring-1 ring-chocolate/10 sm:p-2"
                >
                  <div className="relative mx-auto aspect-square w-full">
                    <Image
                      src={product.src}
                      alt={product.label}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-chocolate/10 bg-chocolate/[0.06] py-3.5 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={`${item}-${i}`}
                className="mx-8 font-display text-sm font-semibold tracking-wide text-chocolate/75"
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
