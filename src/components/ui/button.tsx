import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
const ButtonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
type ButtonVariants = VariantProps<typeof ButtonVariants>;
type ButtonProps = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  };
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariants({ size, variant, className }))}
        {...props}
        ref={ref}
        disabled={isLoading}
      >
        {isLoading ? <Loader2 className="animate-spin size-4" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
