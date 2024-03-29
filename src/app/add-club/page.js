import SubmitButton from "@/components/SubmitButton";
import { redirect } from "next/dist/server/api-utils";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function Page() {
  async function handleAddClub(formData) {
    "use server";
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    const type = formData.get("type");
    const imageurl = formData.get("imageurl");

    const clubResult = (
      await sql`INSERT INTO golf_equipment (name, price, description, imageurl, type) VALUES (${name}, ${price}, ${description}, ${imageurl}, ${type})`
    ).rows;

    revalidatePath("/golf-clubs");

    redirect("/golf-clubs");
  }

  return (
    <div>
      <div className="mt-6 mb-6 flex justify-center">
        <h2 className="text-xl font-extrabold">Add Golf Club Review</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-96 h-full flex justify-center bg-gray-700 rounded-lg">
          <form
            action={handleAddClub}
            className="w-80 flex flex-col justify-center"
          >
            <label className="text-white mt-2 mb-2">Name of Golf Club</label>
            <input
              className="px-1 rounded text-gray-700"
              name="name"
              placeholder="Name"
            />

            <label className="text-white mt-2 mb-2">Price</label>
            <input
              className="px-1 rounded text-gray-700"
              name="price"
              placeholder="e.g 299.00"
            />

            <label className="text-white mt-2 mb-2">Review/Description</label>
            <input
              className="px-1 rounded text-gray-700"
              name="description"
              placeholder="review of club"
            />

            <label className="text-white mt-2 mb-2">Image URL</label>
            <input
              className="px-1 rounded text-gray-700"
              name="imageurl"
              placeholder="paste in web address of image"
            />

            <label className="text-white mt-2 mb-2">Type of Club</label>
            <input
              className="px-1 rounded text-gray-700"
              name="type"
              placeholder="Driver or Putter etc"
            />
            <div className="flex justify-center mt-4">
              <SubmitButton thing="club" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
