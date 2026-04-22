"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<"button"> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", variant = "primary", ...props }, ref) => {
    const baseClass =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-blue-500 dark:focus:ring-offset-gray-900",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 focus:ring-gray-500",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:ring-gray-500",
    };

    const sizeClass = "px-4 py-2 text-sm";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClass} ${variantStyles[variant]} ${sizeClass} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
