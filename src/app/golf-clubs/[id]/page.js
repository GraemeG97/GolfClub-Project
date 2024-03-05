import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export default async function Page({ params }) {
  const club = (await sql`SELECT * FROM golf_equipment WHERE id = ${params.id}`)
    .rows[0];
  // console.log(books)
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-4">{club.name}</h2>
      </div>
      {club.imageurl && (
        <Image
          src={club.imageurl}
          width={300}
          height={500}
          className="w-64 h-64 object-cover rounded-lg mb-4"
          alt="Image of specific golf club we are reviewing"
        />
      )}
      <br />
      <p className="text-lg mb-4">{club.description}</p>
      <br></br>
      <p className="text-xl font-semibold">£ {club.price}</p>
    </div>
  );
}
