import NextAuth from 'next-auth';
import type {NextAuthOptions} from 'next-auth/core/types';
import DiscordProvider from 'next-auth/providers/discord';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../utils/prisma';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // TODO: Add support for an email provider
        // https://next-auth.js.org/v3/configuration/providers#email-provider
        // Providers.Email({
        //   server: process.env.EMAIL_SERVER,
        //   from: process.env.EMAIL_FROM,
        //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
        // }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            checks: ['state']
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    session: {
        strategy: 'jwt'
    }
}

export default NextAuth(authOptions)