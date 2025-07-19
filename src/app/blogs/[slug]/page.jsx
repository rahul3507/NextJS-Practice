/** @format */

import React from "react";

const Page = async ({ params }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Details of: {params.slug}</h1>
    </div>
  );
};

export default Page;
