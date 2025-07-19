/** @format */

import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="p-24 space-y-2">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 p-12 ">
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <button className="bg-red-400  px-3 py-2 rounded-2xl mt-2">
            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;

const blogs = [
  {
    slug: "nextjs-introduction",
    title: "Getting Started with Next.js",
    description:
      "Learn the basics of Next.js, the React framework for building fast and SEO-friendly web applications.",
  },
  {
    slug: "react-vs-vue",
    title: "React vs Vue: Which One Should You Choose?",
    description:
      "A detailed comparison between React and Vue.js to help you decide the right framework for your next project.",
  },
  {
    slug: "tailwind-best-practices",
    title: "Best Practices for Using Tailwind CSS",
    description:
      "Discover practical tips and best practices to make the most out of Tailwind CSS in your web projects.",
  },
  {
    slug: "javascript-array-methods",
    title: "10 Must-Know JavaScript Array Methods",
    description:
      "Boost your JavaScript skills with these essential array methods every developer should master.",
  },
  {
    slug: "fullstack-roadmap-2025",
    title: "Full Stack Developer Roadmap for 2025",
    description:
      "An updated roadmap to becoming a full-stack developer, including tools, frameworks, and learning resources.",
  },
];
