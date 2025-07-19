/** @format */

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-amber-400 px-6 py-4 flex justify-between text-black">
      <h6 className="cursor-pointer">LOGO</h6>
      <ul className="flex gap-6">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Service</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <button className="cursor-pointer">Log in</button>
    </nav>
  );
};

export default Navbar;
