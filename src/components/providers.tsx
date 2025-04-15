"use client";

import { useTheme, ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const ToasterProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system" | undefined;
  };
  return <Toaster theme={theme} richColors expand />;
};

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <ThemeProvider {...props}>
      <ToasterProvider />
      {children}
    </ThemeProvider>
  );
}
