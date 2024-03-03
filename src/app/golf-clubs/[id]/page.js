import Link from "next/link";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export default async function AddPosts({ params }) {
  const [club] = (
    await sql`SELECT * FROM golf_equipment WHERE id =${params.id}`
  ).rows;

  revalidatePath("/golf-clubs/[id]", "page");

  return (
    <div>
      <h1>Golf Club Reviews</h1>
      <h2>{club.name}</h2>
      <Image
        className="rounded-lg"
        src={club.Imageurl}
        height={200}
        width={200}
        alt="Image of the specific golf club we are reviewing"
      />
      <h2>Price: {club.Price}</h2>
      <p>{club.description}</p>
    </div>
  );
}
