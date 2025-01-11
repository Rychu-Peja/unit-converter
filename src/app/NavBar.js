import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-black to-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Navigation Links */}
        <div className="flex space-x-10">
          <Link href="/Unit" className="hover:text-blue-400 text-lg font-bold">
            Unit Converter
          </Link>
          <Link href="/Area" className="hover:text-green-400 text-lg font-bold">
            Area Converter
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Link href="/">
            <div className="relative w-20 h-20">
              <Image
                src="/images/logo.jpg"
                alt="Home Logo"
                className="rounded-full hover:opacity-90 transition-opacity duration-200"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
