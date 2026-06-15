import SectionHeading from "@/components/ui/SectionHeading";

const enjoyItems = [
  {
    icon: "🍞",
    title: "Spread on Bread",
    description: "The OG. Toast, butter, joy.",
  },
  {
    icon: "🥤",
    title: "Add to Smoothies",
    description: "Banana + Pnutty = magic.",
  },
  {
    icon: "🍎",
    title: "Dip with Fruits",
    description: "Apples and bananas, hello.",
  },
  {
    icon: "🥣",
    title: "Mix in Oats",
    description: "Breakfast bowl level up.",
  },
  {
    icon: "🍪",
    title: "Bake into Desserts",
    description: "Cookies, brownies, cheesecakes.",
  },
  {
    icon: "💪",
    title: "Fitness Fuel",
    description: "Pre or post workout snack.",
  },
];

export default function HowToEnjoySection() {
  return (
    <section id="how-to-enjoy" className="bg-section-cream section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading badge="How to Enjoy" title="6 ways to get nutty." />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {enjoyItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-card-lg bg-white p-7 shadow-card ring-1 ring-chocolate/5 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-card-hover sm:p-8"
            >
              <span className="mb-4 block text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-[2.75rem]">
                {item.icon}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-chocolate sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-chocolate/65 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
