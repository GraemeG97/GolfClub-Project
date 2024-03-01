import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav class="flex items-center justify-between px-6">
      <div class="flex items-center space-x-4">
        <Link href="/">
          <Image
            className=" rounded-lg"
            src="/SwingStickCritic.jpg"
            height={300}
            width={300}
            alt="Logo and name of blog"
          />
        </Link>

        <div class="flex items-center space-x-6">
          <Link href="/About" className="text-gray-700 hover:text-gray-900">
            About
          </Link>

          <Link href="/GolfClubs" className="text-gray-700 hover:text-gray-900">
            Golf Clubs
          </Link>

          <Link href="posts" className="text-gray-700 hover:text-gray-900">
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
