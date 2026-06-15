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
    "bg-chocolate text-cream hover:bg-chocolate-light shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  secondary:
    "bg-cream text-chocolate hover:bg-cream-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-cream",
  ghost: "text-chocolate hover:bg-chocolate/10",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
    "inline-flex items-center justify-center gap-2 rounded-button font-display font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
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
