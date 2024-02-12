"use client";

import { Menu, X } from "lucide-react";
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
          ? "bg-green-400 absolute flex flex-col right-0 top-0 p-12 h-screen w-2/3"
          : ""
      }
    >
      <ul
        className={`md:flex ${
          isOpen ? "flex flex-col items-center space-y-5" : "hidden"
        }`}
      >
        {NAVLINKS.map((link) => (
          <li key={link.link}>{link.name}</li>
        ))}
      </ul>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="md:hidden absolute top-0 right-0" size={36} />
        ) : (
          <Menu className="md:hidden" size={36} />
        )}
      </button>
    </nav>
  );
}
