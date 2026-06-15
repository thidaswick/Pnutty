import Badge from "./Badge";
import { cn } from "@/utils/format";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  size?: "default" | "large";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  size = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4 sm:mb-14 sm:space-y-5 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <Badge
          variant={light ? "white" : "default"}
          className={cn(
            light && "border-white/35 bg-white/18 text-white backdrop-blur-sm",
            !light && "shadow-sm"
          )}
        >
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "text-balance font-display font-bold leading-[1.12] tracking-tight",
          size === "large"
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            : "text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl",
          light ? "text-white text-shadow-chocolate" : "text-chocolate"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-balance text-base leading-relaxed sm:text-lg sm:leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
            align === "left" && "max-w-2xl",
            light ? "text-white/85" : "text-chocolate/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
