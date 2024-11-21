// src/app/page.tsx
import SessionComponent from "./SessionComponent"; // Import the new session component

export default function Home() {
  return (
    <>
      <h1>Hello From LooperCode!!</h1>
      <SessionComponent /> {/* Use the SessionComponent */}
    </>
  );
}
