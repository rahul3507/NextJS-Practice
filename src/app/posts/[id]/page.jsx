/** @format */

import React from "react";

export const generateMetadata = async ({ params }) => {
  return {
    title: "Post Details",

    description: "This is from post details",
    keywords: ["about", "about page"],
  };
};

const PostDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h1>Post details of :: {id}</h1>
    </div>
  );
};

export default PostDetailsPage;
