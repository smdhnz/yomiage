import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notojp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-notojp",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Analytics />
      <Head>
        <title>yomiage - fumiya.dev</title>
      </Head>
      <SessionProvider session={session}>
        <div className={`${inter.variable} ${notojp.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
};

export default MyApp;
