import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const clubs = (await sql`SELECT * FROM golf_equipment`).rows;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center bg-opacity-75"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">
        Golf Club Reviews:
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        {clubs.map((club) => (
          <div key={club.id} className="m-12">
            <h3 className="text-2xl font-extrabold mb-2">{club.name}</h3>
            <Image
              className="w-32 h-32 object-cover rounded-md mb-2"
              src={club.imageurl}
              width={75}
              height={75}
              alt="image of club"
            />

            <Link
              href={`/golf-clubs/${club.id}`}
              className="text-blue-700 font-semibold text-xlg"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
