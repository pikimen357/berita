import Link from "next/link";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <nav className="px-6 py-6 sm:px-6 lg:px-8 bg-linear-to-r from-slate-900 to-slate-800 h-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300">
          Tech Blog
        </Link>
        <ul className="flex gap-8 items-center justify-end">
          <li>
            <Link
              href="/"
              className="text-gray-200 hover:text-blue-400  active:underline font-semibold transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-200 hover:text-blue-400  active:underline font-semibold transition duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-200 hover:text-blue-400 active:underline font-semibold transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-200 hover:text-blue-400  active:underline font-semibold transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
