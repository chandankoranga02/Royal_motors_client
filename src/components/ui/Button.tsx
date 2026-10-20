"use client";

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "amber";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#030407] disabled:opacity-50 disabled:pointer-events-none select-none overflow-hidden cursor-pointer";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-electric-blue to-electric-cyan text-slate-950 font-semibold shadow-glow-cyan hover:shadow-glow-cyan-lg hover:brightness-110 focus:ring-electric-cyan",
      secondary:
        "bg-obsidian-800 text-silver-light border border-white/10 hover:border-electric-cyan/40 hover:bg-obsidian-700 shadow-sm focus:ring-white/20",
      outline:
        "border border-white/20 text-silver-light hover:border-electric-cyan hover:text-electric-cyan hover:bg-electric-cyan/5 focus:ring-electric-cyan",
      ghost:
        "text-silver-chrome hover:text-silver-light hover:bg-white/5 focus:ring-white/10",
      amber:
        "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-semibold shadow-glow-amber hover:brightness-110 focus:ring-amber-400",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wider uppercase",
      md: "h-11 px-6 text-sm tracking-wide",
      lg: "h-14 px-8 text-base tracking-wide font-semibold",
    };

    // Cast motion button to accept ref properly
    const MotionButton = motion.button as React.ComponentType<
      HTMLMotionProps<"button"> & { ref?: React.Ref<HTMLButtonElement> }
    >;

    return (
      <MotionButton
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...(props as HTMLMotionProps<"button">)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";
