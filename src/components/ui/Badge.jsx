import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "cyan", children, ...props }) {
  const variantStyles = {
    cyan: "bg-electric-cyan/10 text-electric-cyan border-electric-cyan/30 shadow-[0_0_12px_rgba(0,240,255,0.15)]",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    silver: "bg-white/5 text-silver-metallic border-white/10",
    outline: "border-white/20 text-silver-chrome",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border backdrop-blur-md",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </div>
  );
}
