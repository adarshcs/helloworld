// src/app/SessionComponent.tsx  ..
"use client";  // This makes sure the component runs on the client side

import { signIn, signOut, useSession } from "next-auth/react";

export default function SessionComponent() {
  const { data: session, status } = useSession();

  // Check if the session data is still loading..
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
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
