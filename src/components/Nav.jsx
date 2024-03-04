import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            className=" rounded-lg"
            src="/SwingStickCritic.jpg"
            height={300}
            width={300}
            alt="Logo and name of blog"
          />
        </Link>

        <div className="flex items-center space-x-6 ml-auto">
          <Link href="/About" className="text-gray-700 hover:text-gray-900">
            About
          </Link>

          <Link
            href="/golf-clubs"
            className="text-gray-700 hover:text-gray-900"
          >
            Golf Clubs
          </Link>

          <Link href="/add-club" className="text-gray-700 hover:text-gray-900">
            Add Club
          </Link>
        </div>
      </div>
    </nav>
  );
}
