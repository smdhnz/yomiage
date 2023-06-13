import { type GetServerSidePropsContext } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "~/env.mjs";
import { request } from "~/utils";

export const authOptions: NextAuthOptions = {
  callbacks: {
    signIn: async ({ account }) => {
      if (!account || !account.access_token) return false;

      const guilds = await request<{ id: string }[]>(
        "https://discordapp.com/api/users/@me/guilds",
        { headers: { Authorization: `Bearer ${account.access_token}` } }
      );

      const allowedGuilds = env.DISCORD_GUILDS;

      return guilds.some((guild) => allowedGuilds.includes(guild.id));
    },
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: { scope: "identify guilds" },
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
