"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, placeholder, options, ...props }, ref) => {
    const selectId = React.useId();
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={selectId}
            className="text-sm font-medium text-white"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <motion.div
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <select
              id={selectId}
              className={cn(
                "flex h-10 w-full appearance-none rounded-md border border-palette-accent-500/30 bg-palette-accent-500/10 backdrop-blur-sm px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palette-accent-500 focus-visible:border-palette-accent-500 disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-red-500 focus-visible:ring-red-500",
                className
              )}
              ref={ref}
              {...props}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </motion.div>
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-300">{helperText}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
