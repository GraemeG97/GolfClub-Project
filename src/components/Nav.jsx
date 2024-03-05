import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            className="rounded-lg"
            src="/SwingStickCritic.jpg"
            height={300}
            width={300}
            alt="Logo and name of blog"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-6 ml-auto transition-all duration-500 ease-in-out">
        <Link
          href="/About"
          className="text-gray-700 hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
        >
          About
        </Link>

        <Link
          href="/golf-clubs"
          className="text-gray-700 hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
        >
          Golf Clubs
        </Link>

        <Link
          href="/add-club"
          className="text-gray-700 hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
        >
          Add Club
        </Link>
      </div>

      <div className="md:hidden flex items-center space-x-2">
        {/* Mobile menu button */}
      </div>
    </nav>
  );
}
