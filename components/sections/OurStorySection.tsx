import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: "🥜",
    title: "Rich Taste",
    description: "Slow-roasted peanuts for that deep, nutty flavour.",
  },
  {
    icon: "✨",
    title: "Quality Ingredients",
    description: "No nasties — just real peanuts, real cocoa, real you.",
  },
  {
    icon: "💥",
    title: "Perfect Texture",
    description: "Crunchy bits or silky smooth — your call.",
  },
  {
    icon: "❤️",
    title: "Made for Everyone",
    description: "Kids, athletes, foodies and 3 AM snackers welcome.",
  },
];

export default function OurStorySection() {
  return (
    <section id="about" className="pattern-purple-fallback relative overflow-hidden py-20 md:py-28">
      <div className="pattern-purple absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Our Story"
          title="A startup with one mission — make peanut butter fun again."
          subtitle="Pnutty was born to bring tasty, nutritious, and downright fun spreads to everyday life. Whether it's breakfast, smoothies, desserts or post-gym fuel — there's a Pnutty jar for that."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card group rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <span className="mb-4 block text-4xl">{feature.icon}</span>
              <h3 className="mb-2 font-display text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/75">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
