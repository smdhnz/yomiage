import * as React from "react";
import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Providers } from "~/components/providers";
import { cn } from "~/lib/utils";
import "~/globals.css";

export const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "yomiage",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("antialiased", notoSansJp.className)}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
