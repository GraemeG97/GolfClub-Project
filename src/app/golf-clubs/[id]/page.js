import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export default async function Page({ params }) {
  const club = (await sql`SELECT * FROM golf_equipment WHERE id = ${params.id}`)
    .rows[0];
  // console.log(books)
  return (
    <div className="flex flex-col text-center items-center">
      <div>
        <h2>{club.name}</h2>
      </div>
      {club.imageurl && (
        <Image
          src={club.imageurl}
          width={300}
          height={500}
          alt="Image of specific golf club we are reviewing"
        />
      )}
      <br />
      <p>{club.description}</p>
      <br></br>
      <p>{club.price}</p>
    </div>
  );
}
