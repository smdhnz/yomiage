import * as React from "react";
import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "~/lib/utils";
import { Providers } from "~/components/providers";

import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "yomiage - fumiya.dev",
  description: "軽量かつブラウザのみで動作するTwitch配信コメント読み上げアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body className={cn("antialiased", notoSansJp.className)}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
