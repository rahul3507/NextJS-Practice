/** @format */

import Link from "next/link";
import React from "react";

const AboutContents = () => {
  return (
    <div className="text-center justify-center items-center gap-4">
      <div className="space-x-6">
        <Link href="/about/history">History</Link>
        <Link href="/about/mission">Mission</Link>
      </div>
    </div>
  );
};

export default AboutContents;
