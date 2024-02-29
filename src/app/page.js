import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <div className="absolute h-[300px] w-full sm:w-[480px] -translate-x-1/6 rounded-full bg-gradient-radial from-white to-transparent blur-2xl content-[''] dark:bg-gradient-to-br dark:from-transparent dark:to-yellow-700 dark:opacity-10 lg:h-[360px] z-[-1]"></div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff90]"
          src="/golfclub4project.svg"
          alt="Golf Club Logo"
          width={400}
          height={10}
          priority
        />
      </div>
    </main>
  );
}
