import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pnutty — a Sri Lankan startup on a mission to make peanut butter fun again.",
};

const values = [
  {
    icon: "🌱",
    title: "Real Ingredients",
    text: "We use real roasted peanuts and quality cocoa — no shortcuts, no fillers.",
  },
  {
    icon: "🇱🇰",
    title: "Made in Sri Lanka",
    text: "Roasted, blended, and jarred locally with love and care.",
  },
  {
    icon: "🎉",
    title: "Fun by Design",
    text: "Peanut butter shouldn't be boring. We make spreads that spark joy.",
  },
  {
    icon: "💪",
    title: "Fuel Your Day",
    text: "Breakfast, gym, snacks, desserts — Pnutty fits every moment.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="pattern-purple-fallback py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            badge="About Pnutty"
            title="Spread the Nutty Goodness"
            subtitle="We're a fun, modern, premium Sri Lankan peanut butter startup with one mission — make peanut butter fun again."
            light
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative flex items-center justify-center rounded-card bg-peanut/20 p-12">
              <div className="relative h-64 w-64">
                <Image
                  src="/images/pnutty-logo.png"
                  alt="Pnutty Logo"
                  fill
                  className="object-contain"
                  sizes="256px"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-chocolate">
                Our Story
              </h2>
              <p className="leading-relaxed text-chocolate/70">
                Pnutty was born from a simple idea: peanut butter should be
                exciting. Not just a pantry staple, but something you look
                forward to — on your toast, in your smoothie, straight from the
                jar at midnight.
              </p>
              <p className="leading-relaxed text-chocolate/70">
                We roast premium peanuts in Sri Lanka, blend them into four
                delicious variants — Classic and Choco, Crunchy and Creamy — and
                jar them with love. Every batch is made fresh, never
                compromised.
              </p>
              <Button href="/products" variant="primary">
                Shop Our Jars
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pattern-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading badge="Our Values" title="What we stand for" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-card bg-white p-6 shadow-md transition-transform hover:-translate-y-1"
              >
                <span className="mb-3 block text-4xl">{value.icon}</span>
                <h3 className="mb-2 font-display text-lg font-bold text-chocolate">
                  {value.title}
                </h3>
                <p className="text-sm text-chocolate/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
