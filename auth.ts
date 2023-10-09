import NextAuth, { type DefaultSession } from 'next-auth'

import GitHub from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClient from "@/lib/db/mongo-client";

// Build
// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession['user']
  }
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}

export const nextAuth = NextAuth({
  session: { strategy: "jwt" },
  adapter: MongoDBAdapter(mongoClient, {
    collections: {
      Accounts: "authAccounts",
      Sessions: "authSessions",
      Users: "authUsers",
      VerificationTokens: "authVerificationTokens",
    },
  }),
  providers: [
    GitHub,
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
})

export const { handlers: { GET, POST }, auth } = nextAuth;
