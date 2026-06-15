import { cn } from "@/utils/format";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cream" | "chocolate" | "purple" | "green" | "blue" | "pink";
  className?: string;
}

const variantStyles = {
  default: "bg-peanut/20 text-chocolate border-peanut/30",
  cream: "bg-cream text-chocolate border-cream-dark",
  chocolate: "bg-chocolate/10 text-chocolate border-chocolate/20",
  purple: "bg-purple/20 text-purple border-purple/30",
  green: "bg-green/20 text-green border-green/30",
  blue: "bg-blue/20 text-blue border-blue/30",
  pink: "bg-pink/20 text-pink border-pink/30",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-button border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
