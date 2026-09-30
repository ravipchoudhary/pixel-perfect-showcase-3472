import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow rule-label">{children}</p>;
}

export function Display({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "display text-4xl sm:text-5xl lg:text-6xl text-ink text-balance",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type BtnProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
};

const btnBase =
  "inline-flex items-center justify-center gap-2 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-all duration-500 rounded-xs";

const btnVariants = {
  solid: "bg-ink text-background hover:bg-accent",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-background",
  light:
    "border border-background/40 text-background backdrop-blur-[2px] hover:bg-background hover:text-ink",
};

export function ButtonLink({
  to,
  children,
  variant = "solid",
  className,
}: BtnProps & { to: string }) {
  return (
    <Link to={to} className={cn(btnBase, btnVariants[variant], className)}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  children,
  variant = "solid",
  className,
  ...rest
}: BtnProps & { href: string; target?: string; rel?: string }) {
  return (
    <a href={href} className={cn(btnBase, btnVariants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
