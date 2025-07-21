/** @format */

import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id, description } = await params;
  return {
    title: `Post Details ${id}`,
    description: `this is for ${id}`,
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
