"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleMouseMove = (e: MouseEvent) => {
      const links = nav.getElementsByTagName("a");
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      Array.from(links).forEach((link) => {
        const linkRect = link.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;

        const distanceX = mouseX - linkCenterX;
        const distanceY = mouseY - linkCenterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const moveX = (distanceX / maxDistance) * 2;
          const moveY = (distanceY / maxDistance) * 2;
          link.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        } else {
          link.style.transform = "translate(0, 0)";
        }
      });
    };

    nav.addEventListener("mousemove", handleMouseMove);
    return () => nav.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md border-b border-white/[0.08]" />

      {/* Navbar Content */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={navRef}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    relative px-1 py-2 text-sm font-medium
                    transition-all duration-200
                    hover:text-cyan-400
                    before:absolute before:inset-0
                    before:h-full before:w-full
                    before:rounded-md
                    before:bg-cyan-500/0
                    before:transition-all
                    before:duration-300
                    hover:before:bg-cyan-500/10
                    hover:before:shadow-[0_0_15px_rgba(34,211,238,0.5)]
                    ${
                      pathname === item.path
                        ? "text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-500 after:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        : "text-gray-300"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-y-0 right-0 w-full bg-black/95 backdrop-blur-md
          transform transition-all duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2 group"
          aria-label="Close menu"
        >
          <div className="relative w-8 h-8">
            <div className="absolute top-1/2 left-1/2 w-8 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 rotate-45 rounded-full transition-all duration-300 group-hover:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <div className="absolute top-1/2 left-1/2 w-8 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 -rotate-45 rounded-full transition-all duration-300 group-hover:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          </div>
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`
                relative text-2xl font-orbitron font-medium
                transition-all duration-300
                hover:text-cyan-400
                ${
                  pathname === item.path
                    ? "text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-500 after:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    : "text-gray-300"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
