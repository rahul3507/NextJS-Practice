/** @format */

import Link from "next/link";
import React from "react";

const Navbar = () => {
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
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="bg-amber-400 px-6 py-4 flex justify-between text-black">
      <h6 className="cursor-pointer">LOGO</h6>
      <ul className="flex gap-6">
        {links?.map((link) => (
          <Link key={link.path} href={link.path}>
            {link.title}
          </Link>
        ))}
      </ul>
      <button className="cursor-pointer">Log in</button>
    </nav>
  );
};

export default Navbar;
