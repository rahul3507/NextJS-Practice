/** @format */

import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-amber-400 text-black p-12">Dashboard Layout</div>
      {children}
      <footer className="p-12 bg-gray-500">Dashboard footer</footer>
    </div>
  );
};

export default DashboardLayout;
