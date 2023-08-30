import * as React from "react";
import { cn } from "~/lib/utils";
import { Label } from "./ui/label";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  htmlFor?: string;
  label?: string;
}

export function Labeled({
  className,
  htmlFor,
  label,
  children,
  ...props
}: Props) {
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      {label ? <Label htmlFor={htmlFor ?? ""}>{label}</Label> : null}
      {children}
    </div>
  );
}
