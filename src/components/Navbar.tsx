"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo or brand */}
        <Link href="/" className="text-2xl font-bold text-davai">
          DAVAI
        </Link>

        {/* Nav links */}
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Play
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About us
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}