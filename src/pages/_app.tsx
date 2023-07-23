import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";

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
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo
        defaultTitle="yomiage - fumiya.dev"
        description="配信のコメントの読み上げをブラウザ上で行えるサービス"
        openGraph={{
          type: "website",
          title: "yomiage - fumiya.dev",
          description: "配信のコメントの読み上げをブラウザ上で行えるサービス",
          siteName: "yomiage",
          url: "https://yomiage.fumiya.dev",
          images: [
            {
              url: "https://cdn.discordapp.com/attachments/945315689210712084/1118931372959088640/image.png",
              width: 800,
              height: 600,
              alt: "yomiage OG Image",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <SessionProvider session={session}>
        <main className={cn(inter.variable, notojp.variable, "font-sans")}>
          <Component {...pageProps} />
          <Toaster />
        </main>
      </SessionProvider>
    </>
  );
};

export default MyApp;
