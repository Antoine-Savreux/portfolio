"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

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
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutsideMouse(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    }

    function handleClickOutsideTouch(event: TouchEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideMouse);
    document.addEventListener("touchstart", handleClickOutsideTouch);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMouse);
      document.removeEventListener("touchstart", handleClickOutsideTouch);
    };
  }, [isOpen]);
  return (
    <nav
      ref={navRef}
      className={
        isOpen
          ? "absolute flex flex-col right-0 top-0 pt-24 h-screen w-2/3 md:w-1/3 bg-bgNavMenu z-50"
          : "lg:flex"
      }
    >
      <ul
        className={` ${
          isOpen
            ? "flex flex-col items-center space-y-5"
            : "hidden lg:flex lg:space-x-6"
        }`}
      >
        {NAVLINKS.map((link) => (
          <li key={link.link}>
            <Link
              className="text-secondary text-2xl lg:text-3xl lg:font-normal lg:hover:text-primary lg:hover:underline lg:hover:underline-offset-8"
              href={link.link}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X
            className="absolute top-2 right-2 text-secondary lg:hidden"
            size={36}
          />
        ) : (
          <Menu className="text-secondary lg:hidden" size={36} />
        )}
      </button>
    </nav>
  );
}
