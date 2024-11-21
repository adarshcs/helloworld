import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {session ? (
        <>
          <h1>Welcome, {session.user?.name}!</h1>
          <img src={session.user?.image} alt="User image" />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Hello From LooperCode!!</h1>
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
