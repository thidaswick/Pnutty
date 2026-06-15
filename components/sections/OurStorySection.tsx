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
    <section
      id="about"
      className="bg-story-purple-fallback relative overflow-hidden section-padding"
    >
      <div className="bg-story-purple absolute inset-0 opacity-60" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-purple-light/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-dark/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Story"
          title="A startup with one mission — make peanut butter fun again."
          subtitle="Pnutty was born to bring tasty, nutritious, and downright fun spreads to everyday life. Whether it's breakfast, smoothies, desserts or post-gym fuel — there's a Pnutty jar for that."
          light
          size="large"
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card group rounded-card-lg p-6 transition-all duration-400 hover:-translate-y-1.5 hover:bg-white/18 sm:p-7"
            >
              <span className="mb-4 block text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-[2.75rem]">
                {feature.icon}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-white sm:text-xl">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/78">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative mt-16 h-8 overflow-hidden sm:mt-20 sm:h-10">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V24C1200 48 960 48 720 24C480 0 240 0 0 24V0Z"
            fill="#fdf4e3"
          />
        </svg>
      </div>
    </section>
  );
}
