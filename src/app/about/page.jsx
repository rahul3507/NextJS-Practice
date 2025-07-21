/** @format */

import AboutContents from "@/components/AboutContents";
import React from "react";
export const metadata = {
  title: "About",

  description: "Super powerful next project",
  keywords: ["about", "about page"],
};

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time");
  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const currentTime = await getTime();
  return (
    <div>
      <h1 className="text-red-500">this is about page</h1>

      <h3>Current Time : {currentTime}</h3>
      <AboutContents />
    </div>
  );
};

export default AboutPage;
