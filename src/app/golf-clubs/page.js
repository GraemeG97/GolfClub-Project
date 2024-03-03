import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function GolfClubs() {
  const clubs = await sql`SELECT * FROM golf_equipment`;
  revalidatePath("/golf-clubs");

  return (
    <div>
      <h1>Golf Club Reviews</h1>
      {clubs.rows.map((club) => (
        <div key={club.golf_equipment_id}>
          <Link href={`/clubs/${club.golf_equipment_id}`}>
            <h3>{club.golf_equipment_name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
