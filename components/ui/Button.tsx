import type { ReactNode } from "react";
import { cn } from "@/utils/format";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-chocolate text-cream shadow-button hover:bg-chocolate-light hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-button",
  secondary:
    "bg-white/90 text-chocolate ring-1 ring-chocolate/15 shadow-sm hover:bg-white hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm",
  outline:
    "border-2 border-chocolate/80 text-chocolate bg-transparent hover:bg-chocolate hover:text-cream hover:-translate-y-0.5",
  ghost: "text-chocolate hover:bg-chocolate/8",
  whatsapp:
    "bg-[#25D366] text-white shadow-button hover:bg-[#1fb855] hover:shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5)] hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-button font-display font-bold tracking-wide transition-all duration-300 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
