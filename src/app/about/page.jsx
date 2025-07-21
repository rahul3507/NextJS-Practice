/** @format */

import AboutContents from "@/components/AboutContents";
import React from "react";
export const metadata = {
  title: "About",
  description: "Super powerful next project",
};

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-red-500">this is about page</h1>
      <AboutContents />
    </div>
  );
};

export default AboutPage;
