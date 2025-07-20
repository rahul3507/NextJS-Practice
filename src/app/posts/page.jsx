/** @format */

import { getPosts } from "@/services/PostApi";
import Link from "next/link";
import React from "react";

const PostPage = async () => {
  const postsData = await getPosts();
  console.log(postsData);
  return (
    <div className="h-screen">
      <h1>All posts</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {postsData?.slice(0, 10).map((post) => (
          <div key={post.id} className="p-2 border-2">
            <h6>{post.title}</h6>
            <br />
            <p>{post.body}</p>
            <br />

            <Link
              href={`/posts/${post.id}`}
              className="p-2 bg-amber-300 text-black rounded-2xl"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
