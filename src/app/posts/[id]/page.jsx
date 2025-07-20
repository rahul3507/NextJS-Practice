/** @format */

import React from "react";

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
