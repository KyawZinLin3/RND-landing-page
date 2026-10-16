import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-ink text-white hover:bg-coral hover:shadow-lg hover:shadow-coral/20",
      coral: "bg-coral text-white hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/25",
      outline: "border border-black/10 bg-white text-ink hover:border-coral hover:text-coral",
      ghost: "text-ink hover:bg-black/5",
    },
    size: { default: "h-11 px-6 text-sm", sm: "h-9 px-4 text-xs", lg: "h-13 px-7 text-sm" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
