import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20",
  outline: "border border-white/30 text-white hover:border-accent hover:text-accent",
  ghost: "text-white/70 hover:text-accent"
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
