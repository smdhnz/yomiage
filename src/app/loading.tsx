import * as React from "react";
import { cn } from "~/lib/utils";
import { Skeleton } from "~/components/ui/skeleton";

const Field = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-2", className)} {...props}>
    <Skeleton className="h-4 w-1/4" />
    <Skeleton className="h-10" />
  </div>
);

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-xl flex-col gap-4 p-8">
        <Field />
        <Field />
        <Field />
        <Field />
        <div className="grid gap-2">
          <div className="flex gap-2">
            <Field className="flex-1" />
            <Field className="flex-1" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="grid gap-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-2" />
        </div>
        <div className="grid gap-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-6 w-12" />
        </div>
        <Field />
      </div>
    </div>
  );
}
