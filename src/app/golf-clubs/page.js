import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const clubs = (await sql`SELECT * FROM golf_equipment`).rows;

  return (
    <div>
      <h1>Golf Club Reviews:</h1>
      <div className="flex flex-row flex-wrap">
        {clubs.map((club) => (
          <div key={club.id} className="m-8">
            <h3>{club.name}</h3>
            <Image
              src={club.imageurl}
              width={75}
              height={75}
              alt="image of club"
            />
            <Link href={`/golf-clubs/${club.id}`} className="text-blue-500">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
