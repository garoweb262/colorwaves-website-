"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const checkboxId = React.useId();
    
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <input
              id={checkboxId}
              type="checkbox"
              className={cn(
                "h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-red-500 focus:ring-red-500",
                className
              )}
              ref={ref}
              {...props}
            />
          </motion.div>
          {label && (
            <label 
              htmlFor={checkboxId}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer"
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-slate-500 dark:text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
