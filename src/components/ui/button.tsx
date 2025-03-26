import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseClasses = "flex items-center justify-center rounded-md font-medium transition";

    const variantClasses = {
      default: "bg-custom-yellow text-custom-darkBlue hover:bg-custom-yellow/90",
      outline: "border border-custom-yellow text-custom-yellow hover:bg-custom-yellow/10",
      ghost: "hover:bg-gray-100 text-gray-700",
    }[variant];

    const sizeClasses = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    }[size];

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses, sizeClasses, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };