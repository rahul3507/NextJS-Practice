/** @format */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  const handler = () => {};
  return (
    <nav className="bg-amber-400 px-6 py-4 flex justify-between text-black">
      <h6 className="cursor-pointer">LOGO</h6>
      <ul className="flex gap-6">
        {links?.map((link) => (
          <Link
            className={`${pathName === link.path && "text-amber-700"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button onClick={handler} className="cursor-pointer">
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
