import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/prisma/client";
import GoogleProvider from "next-auth/providers/google";
import {NextAuthOptions} from "next-auth";

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        session({ session, token, user }) {
            console.log(`session callback called, and session is ${(session ? '' : 'not')} set`)
            return session // The return type will match the one returned in `useSession()`
        },
    }
};

export default authOptions;