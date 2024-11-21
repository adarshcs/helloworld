// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const result = await NextAuth(req, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    pages: {
      signIn: "/auth/signin", // Optional: customize the sign-in page
    },
  });

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const result = await NextAuth(req, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    pages: {
      signIn: "/auth/signin", // Optional: customize the sign-in page
    },
  });

  return NextResponse.json(result);
}
