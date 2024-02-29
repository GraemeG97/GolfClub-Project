import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff90]"
          src="/golfclub4project.svg"
          alt="Golf Club Logo"
          width={200}
          height={10}
          priority
        />
      </div>
    </main>
  );
}
