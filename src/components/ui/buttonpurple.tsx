import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const ButtonP = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseClasses = "flex items-center justify-center rounded-md font-medium transition";

    const variantClasses = {
      default: "bg-fuchsia text-fuchsia-900 hover:bg-fuchsia-900",
      outline: "border border-yellow-400 text-yellow-400 hover:bg-yellow-100",
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

ButtonP.displayName = "Button";
export { ButtonP };