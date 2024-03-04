import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to SwingStickCritic
      </h1>
      <p className="text-lg text-center max-w-lg">
        This is a place where we can look back on the past and still be in the
        present. I have picked out 9 golf clubs: 3 Drivers, 3 Irons & 3 Putters
        which I personally like. Click Golf Clubs above to check each one out!
      </p>
    </main>
  );
}
