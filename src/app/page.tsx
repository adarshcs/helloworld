// src/app/page.tsx

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {session ? (
        <>
          <h1>Welcome, {session.user?.name}!</h1>
          {/* Use Image component for better performance */}
          <Image 
            src={session.user?.image || "/default-image.jpg"} 
            alt="User image" 
            width={100} 
            height={100} 
          />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Hello From LooperCode!!!!</h1>
          <button
            onClick={() => signIn("google")}
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
}
