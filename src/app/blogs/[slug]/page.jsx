/** @format */

const Page = async ({ params }) => {
  const { slug } = await params; // ✅ await this
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Details of: {slug}</h1>
    </div>
  );
};

export default Page;
