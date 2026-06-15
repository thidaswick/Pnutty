import Badge from "./Badge";
import { cn } from "@/utils/format";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <Badge
          variant={light ? "cream" : "default"}
          className={light ? "border-white/30 bg-white/20 text-white" : ""}
        >
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-chocolate"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto max-w-2xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/80" : "text-chocolate/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
