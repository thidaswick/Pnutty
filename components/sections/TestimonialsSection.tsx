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
    avatarBg: "bg-chocolate text-cream",
    roleColor: "text-chocolate/65",
    quoteColor: "text-chocolate/90",
  },
  {
    quote:
      "Classic Creamy is my pre-gym fuel. Clean ingredients, real taste, easy choice.",
    name: "Tharindu R.",
    role: "Athlete",
    bg: "bg-blue",
    textColor: "text-white",
    avatarBg: "bg-white/25 text-white",
    roleColor: "text-white/75",
    quoteColor: "text-white/95",
  },
  {
    quote:
      "Local, premium and actually delicious. Finally a peanut butter brand I'm proud to gift.",
    name: "Nayomi S.",
    role: "Foodie",
    bg: "bg-pink",
    textColor: "text-white",
    avatarBg: "bg-white/25 text-white",
    roleColor: "text-white/75",
    quoteColor: "text-white/95",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-section-cream section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Loved by Sri Lanka"
          title="People are going nuts."
        />

        <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className={`${testimonial.bg} ${testimonial.textColor} group flex min-h-[280px] flex-col rounded-card-lg p-7 shadow-card transition-all duration-400 ease-out hover:-translate-y-2 hover:shadow-card-hover sm:min-h-[300px] sm:p-8`}
            >
              <span
                className={`mb-4 font-display text-5xl leading-none opacity-40 ${testimonial.textColor}`}
                aria-hidden
              >
                &ldquo;
              </span>
              <p
                className={`${testimonial.quoteColor} mb-8 flex-1 text-base leading-relaxed sm:text-lg sm:leading-relaxed`}
              >
                {testimonial.quote}
              </p>
              <footer className="flex items-center gap-3.5">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ${testimonial.avatarBg}`}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <cite className="not-italic font-display text-base font-bold">
                    {testimonial.name}
                  </cite>
                  <p className={`text-sm ${testimonial.roleColor}`}>
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
