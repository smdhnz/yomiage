"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { TailwindIndicator } from "~/components/tailwind-indicator";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SessionProvider>
        <Toaster position="top-center" richColors />
        <TailwindIndicator />
        {children}
      </SessionProvider>
    </NextThemesProvider>
  );
}
