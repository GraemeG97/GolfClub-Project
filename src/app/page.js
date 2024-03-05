import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <h1 className="text-5xl font-bold mb-6 text-center text-white">
        Welcome to SwingStickCritic
      </h1>
      <p className="text-lg text-center max-w-lg text-white">
        This is a place where we can look back on the past and still be in the
        present. I have picked out 9 golf clubs: 3 Drivers, 3 Irons & 3 Putters
        which I personally like. Click Golf Clubs above to check each one out!
      </p>
    </main>
  );
}
