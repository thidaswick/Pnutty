import { cn } from "@/utils/format";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cream" | "chocolate" | "purple" | "green" | "blue" | "pink" | "white";
  className?: string;
}

const variantStyles = {
  default: "bg-peanut/25 text-chocolate border-peanut/40",
  cream: "bg-cream text-chocolate border-cream-dark/60",
  chocolate: "bg-chocolate/10 text-chocolate border-chocolate/15",
  purple: "bg-purple/15 text-purple-dark border-purple/25",
  green: "bg-green/15 text-green border-green/25",
  blue: "bg-blue/15 text-blue border-blue/25",
  pink: "bg-pink/15 text-pink border-pink/25",
  white: "bg-white/20 text-white border-white/30",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-button border px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
