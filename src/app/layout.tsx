import * as React from "react";
import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "~/components/providers";
import { cn } from "~/lib/utils";
import "~/globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

const APP_NAME = "yomiage";
const APP_DESCRIPTION = "yomiage app on twitch live chat";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: "/favicon.svg",
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_NAME,
      template: APP_NAME,
    },
    description: APP_DESCRIPTION,
  },
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
        <Analytics />
      </body>
    </html>
  );
}
