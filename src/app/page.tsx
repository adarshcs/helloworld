// src/app/page.tsx

"use client";

import { signIn, signOut, useSession } from "next-auth/react";  // Import signIn, signOut, and useSession

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <h1>Hello From LooperCode!!</h1>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ) : (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
