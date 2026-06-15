import SectionHeading from "@/components/ui/SectionHeading";

const flavours = [
  {
    emoji: "🥜",
    title: "Classic",
    description: "Roasted peanut taste, simple and natural.",
    bg: "pattern-green",
    textLight: false,
    accent: "ring-green/20",
  },
  {
    emoji: "🍫",
    title: "Choco",
    description: "Sweet chocolate peanut blend.",
    bg: "pattern-pink",
    textLight: false,
    accent: "ring-pink/20",
  },
  {
    emoji: "💥",
    title: "Crunchy",
    description: "Real peanut pieces. Real texture.",
    bg: "pattern-blue",
    textLight: false,
    accent: "ring-blue/20",
  },
  {
    emoji: "🌊",
    title: "Creamy",
    description: "Smooth, spreadable, dreamy.",
    bg: "pattern-yellow",
    textLight: false,
    accent: "ring-peanut/30",
  },
];

export default function FlavourHighlightSection() {
  return (
    <section id="flavours" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Flavour Lab"
          title="Pick your vibe."
          subtitle="Two textures. Two flavours. Four ways to fall in love."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {flavours.map((flavour) => (
            <div
              key={flavour.title}
              className={`${flavour.bg} group relative overflow-hidden rounded-card-lg p-7 shadow-card ring-1 ${flavour.accent} transition-all duration-400 ease-out hover:-translate-y-2 hover:shadow-card-hover sm:p-8`}
            >
              <span className="mb-5 block text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-[3.25rem]">
                {flavour.emoji}
              </span>
              <h3
                className={`mb-2 font-display text-xl font-bold sm:text-2xl ${flavour.textLight ? "text-white" : "text-chocolate"}`}
              >
                {flavour.title}
              </h3>
              <p
                className={`text-sm leading-relaxed sm:text-base ${flavour.textLight ? "text-white/82" : "text-chocolate/70"}`}
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
