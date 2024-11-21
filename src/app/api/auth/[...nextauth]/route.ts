import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest } from "next/server";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Optional: customize the sign-in page
  },
};

export async function GET(req: NextRequest) {
  return NextAuth(req, authOptions);
}

export async function POST(req: NextRequest) {
  return NextAuth(req, authOptions);
}
