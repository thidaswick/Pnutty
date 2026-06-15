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
    <section id="how-to-enjoy" className="pattern-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="How to Enjoy"
          title="6 ways to get nutty."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enjoyItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-card bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mb-4 block text-4xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <h3 className="mb-2 font-display text-xl font-bold text-chocolate">
                {item.title}
              </h3>
              <p className="text-sm text-chocolate/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
