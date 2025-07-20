/** @format */

const Page = async ({ params }) => {
  const { slug } = await params; // ✅ await this
  const { title, description } = blogs.find((blog) => blog.slug == slug);
  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Details of: {slug}</h1>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default Page;

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
