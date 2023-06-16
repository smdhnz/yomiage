import * as React from "react";

import { cn } from "~/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-white">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            "flex",
            "w-full",
            "rounded-md",
            "px-4 py-2",
            "text-white",
            "bg-white/10",
            "border-input",
            "ring-offset-background",
            "hover:bg-white/20",
            "placeholder:text-muted-foreground",
            "transition",
            "focus-visible:ring-ring",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-white/50",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
