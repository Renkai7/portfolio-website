"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-cyan-500/30 bg-gray-900/90 fixed top-0 z-50 neon-navbar backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                pathname === "/"
                  ? "border-b-2 border-cyan-400 text-cyan-400 neon-text"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                pathname === "/about"
                  ? "border-b-2 border-cyan-400 text-cyan-400 neon-text"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                pathname === "/projects"
                  ? "border-b-2 border-cyan-400 text-cyan-400 neon-text"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
