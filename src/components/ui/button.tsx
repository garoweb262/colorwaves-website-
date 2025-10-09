"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", loading = false, disabled, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <button
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            {
              "bg-palette-accent-500 text-white hover:bg-palette-accent-600 dark:bg-palette-accent-500 dark:hover:bg-palette-accent-600": variant === "default",
              "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600": variant === "destructive",
              "border border-palette-accent-500 dark:border-palette-accent-600 bg-transparent dark:bg-transparent hover:bg-palette-accent-500 dark:hover:bg-palette-accent-600 hover:text-palette-accent-900 dark:hover:text-palette-accent-100": variant === "outline",
              "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700": variant === "secondary",
              "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100": variant === "ghost",
              "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400": variant === "link",
            },
            {
              "h-10 px-4 py-2": size === "default",
              "h-9 rounded-md px-3": size === "sm",
              "h-11 rounded-md px-8": size === "lg",
              "h-10 w-10": size === "icon",
            },
            className
          )}
          ref={ref}
          disabled={disabled || loading}
          {...props}
        >
        {loading && (
          <motion.div
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
          {props.children}
        </button>
      </motion.div>
    );
  }
);
Button.displayName = "Button";

export { Button };
