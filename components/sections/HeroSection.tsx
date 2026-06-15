import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const floatingProducts = [
  {
    src: "/images/classic-crunchy.png",
    label: "Classic · Crunchy",
    bg: "bg-green/20",
    rotate: "-rotate-6",
    top: "top-4",
    left: "left-0",
    delay: "",
  },
  {
    src: "/images/choco-crunchy.png",
    label: "Choco · Crunchy",
    bg: "bg-blue/20",
    rotate: "rotate-3",
    top: "top-24",
    left: "left-32",
    delay: "animate-float-delayed",
  },
  {
    src: "/images/choco-creamy.png",
    label: "Choco · Creamy",
    bg: "bg-pink/20",
    rotate: "-rotate-3",
    top: "top-48",
    left: "left-8",
    delay: "animate-float-slow",
  },
  {
    src: "/images/classic-creamy.png",
    label: "Classic · Creamy",
    bg: "bg-peanut/30",
    rotate: "rotate-6",
    top: "top-64",
    left: "left-40",
    delay: "animate-float",
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
    <section className="pattern-yellow-fallback relative overflow-hidden pt-24">
      <div className="pattern-yellow absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-8 animate-fade-in-up">
            <Badge variant="cream">Introducing Pnutty</Badge>

            <h1 className="font-display text-5xl font-bold leading-[1.1] text-chocolate md:text-6xl lg:text-7xl">
              <span className="block text-cream drop-shadow-sm">Spread the</span>
              <span className="block text-chocolate">Nutty</span>
              <span className="block text-cream drop-shadow-sm">Goodness</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-chocolate/80">
              Premium peanut butter made for every mood — crunchy, creamy,
              classic, and choco. Roasted, blended, and jarred with love in Sri
              Lanka.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/products" variant="primary" size="lg">
                Shop Now
              </Button>
              <Button href="/#products" variant="secondary" size="lg">
                Explore Flavours →
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {["100% Natural", "Premium Roast", "Made with Love"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-chocolate/10 px-4 py-1.5 text-sm font-semibold text-chocolate"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative hidden h-[500px] lg:block">
            {floatingProducts.map((product) => (
              <div
                key={product.src}
                className={`absolute ${product.top} ${product.left} ${product.rotate} ${product.delay}`}
                style={
                  {
                    "--rotate": product.rotate.includes("-") ? "-6deg" : "6deg",
                  } as React.CSSProperties
                }
              >
                <div
                  className={`rounded-card ${product.bg} p-4 shadow-2xl backdrop-blur-sm transition-transform hover:scale-105`}
                >
                  <div className="relative h-36 w-36">
                    <Image
                      src={product.src}
                      alt={product.label}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="144px"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-bold text-chocolate">
                    {product.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {floatingProducts.slice(0, 4).map((product) => (
              <div
                key={product.src}
                className={`rounded-card ${product.bg} p-3 shadow-lg`}
              >
                <div className="relative mx-auto h-28 w-28">
                  <Image
                    src={product.src}
                    alt={product.label}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-bold text-chocolate">
                  {product.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-chocolate/10 bg-chocolate/5 py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-6 font-display text-sm font-semibold text-chocolate/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
