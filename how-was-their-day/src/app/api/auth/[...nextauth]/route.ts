import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { UserSession } from "@/types";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      const userSession = session as UserSession;
      if (userSession.user) {
        userSession.user.id = token.id as string;
      }
      return userSession;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };