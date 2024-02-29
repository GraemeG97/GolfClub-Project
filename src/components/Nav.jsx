import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ol className="flex flex-row p-3">
        <li className="m-4">
          <Link href="/">Home</Link>
        </li>
        <li className="m-4">
          <Link href="/about">About</Link>
        </li>
        <li className="m-4">
          <Link href="/golf-clubs">Golf Clubs</Link>
        </li>
        <li className="m-4">
          <Link href="add-golf-club">Add Your Fav Golf Club</Link>
        </li>
      </ol>
    </div>
  );
}
