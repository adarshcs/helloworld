// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest } from "next/server";  // Import only NextRequest

// Handle GET and POST requests for NextAuth
export async function GET(req: NextRequest) {
  return NextAuth(req); // Pass request to NextAuth
}

export async function POST(req: NextRequest) {
  return NextAuth(req); // Pass request to NextAuth
}

// Set NextAuth options separately for handling the provider and configurations
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
