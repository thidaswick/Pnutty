import SectionHeading from "@/components/ui/SectionHeading";
import { getInitials } from "@/utils/format";

const testimonials = [
  {
    quote:
      "My kids fight over the Choco Crunchy. I had to start hiding a backup jar.",
    name: "Ishara P.",
    role: "Mom of two",
    bg: "bg-peanut",
    textColor: "text-chocolate",
  },
  {
    quote:
      "Classic Creamy is my pre-gym fuel. Clean ingredients, real taste, easy choice.",
    name: "Tharindu R.",
    role: "Athlete",
    bg: "bg-blue",
    textColor: "text-white",
  },
  {
    quote:
      "Local, premium and actually delicious. Finally a peanut butter brand I'm proud to gift.",
    name: "Nayomi S.",
    role: "Foodie",
    bg: "bg-pink",
    textColor: "text-white",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Loved by Sri Lanka"
          title="People are going nuts."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className={`${testimonial.bg} ${testimonial.textColor} flex flex-col rounded-card p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1`}
            >
              <p className="mb-6 flex-1 text-lg leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${testimonial.bg === "bg-peanut" ? "bg-chocolate text-cream" : "bg-white/20 text-white"}`}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <cite className="not-italic font-display font-bold">
                    {testimonial.name}
                  </cite>
                  <p
                    className={`text-sm ${testimonial.bg === "bg-peanut" ? "text-chocolate/70" : "text-white/70"}`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
