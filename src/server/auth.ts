import { type GetServerSidePropsContext } from "next";
import { getServerSession, type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "~/env.mjs";
import { typedFetch } from "~/lib/utils";

export const authOptions: NextAuthOptions = {
  callbacks: {
    signIn: async ({ account }) => {
      if (!account || !account.access_token) return false;

      const user = await typedFetch<{ id: string }>(
        "https://discordapp.com/api/users/@me",
        { headers: { Authorization: `Bearer ${account.access_token}` } }
      );

      if (!user) return false;

      const authedIds = await typedFetch<{ contents: { userId: string }[] }>(
        "https://76n60px8na.microcms.io/api/v1/yomiage?limit=100&fields=userId",
        {
          headers: {
            "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY,
          },
        }
      );

      return authedIds.contents.some((i) => i.userId === user.id);
    },
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: { scope: "identify" },
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  pages: { signIn: "/", error: "/" },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
