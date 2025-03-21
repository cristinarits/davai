import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, Button>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-md font-medium transition",
          {
            "bg-custom-yellow text-custom-darkBlue hover:bg-custom-yellow/90":
              variant === "default",
            "border border-custom-yellow text-custom-yellow hover:bg-custom-yellow/10":
              variant === "outline",
            "hover:bg-gray-100 text-gray-700": variant === "ghost",
            "px-3 py-1 text-sm": size === "sm",
            "px-4 py-2 text-base": size === "md",
            "px-5 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"; // ✅ This line ensures it's recognized as a component
export default Button;