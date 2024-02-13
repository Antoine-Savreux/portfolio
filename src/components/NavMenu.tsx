"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type NavLink = {
  name: string;
  link: string;
};

const NAVLINKS: NavLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Work", link: "/work" },
  { name: "Contact", link: "/contact" },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={
        isOpen
          ? " bg-slate-200 absolute flex flex-col right-0 top-0 p-12 h-screen w-2/3"
          : ""
      }
    >
      <ul
        className={`md:flex ${
          isOpen ? "flex flex-col items-center space-y-5" : "hidden"
        }`}
      >
        {NAVLINKS.map((link) => (
          <li key={link.link}>
            <Link href={link.link} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="md:hidden absolute top-2 right-2" size={36} />
        ) : (
          <Menu className="md:hidden" size={36} />
        )}
      </button>
    </nav>
  );
}
