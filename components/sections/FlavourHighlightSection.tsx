import SectionHeading from "@/components/ui/SectionHeading";

const flavours = [
  {
    emoji: "🥜",
    title: "Classic",
    description: "Roasted peanut taste, simple and natural.",
    bg: "pattern-green",
    textLight: true,
  },
  {
    emoji: "🍫",
    title: "Choco",
    description: "Sweet chocolate peanut blend.",
    bg: "pattern-pink",
    textLight: true,
  },
  {
    emoji: "💥",
    title: "Crunchy",
    description: "Real peanut pieces. Real texture.",
    bg: "pattern-blue",
    textLight: true,
  },
  {
    emoji: "🌊",
    title: "Creamy",
    description: "Smooth, spreadable, dreamy.",
    bg: "pattern-yellow",
    textLight: false,
  },
];

export default function FlavourHighlightSection() {
  return (
    <section id="flavours" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Flavour Lab"
          title="Pick your vibe."
          subtitle="Two textures. Two flavours. Four ways to fall in love."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flavours.map((flavour) => (
            <div
              key={flavour.title}
              className={`${flavour.bg} group relative overflow-hidden rounded-card p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <span className="mb-4 block text-5xl transition-transform duration-300 group-hover:scale-110">
                {flavour.emoji}
              </span>
              <h3
                className={`mb-2 font-display text-2xl font-bold ${flavour.textLight ? "text-white" : "text-chocolate"}`}
              >
                {flavour.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${flavour.textLight ? "text-white/80" : "text-chocolate/70"}`}
              >
                {flavour.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
