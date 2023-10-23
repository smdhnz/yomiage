"use client";

import { useTheme, ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";

const ToasterProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system" | undefined;
  };
  return <Toaster theme={theme} richColors expand />;
};

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ToasterProvider />
      {children}
    </NextThemesProvider>
  );
}
