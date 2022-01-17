import { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <div className="w-full py-12 mt-5 my-0 mx-auto prose prose-lg prose-gray prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline dark:prose-invert">
      <h1>4️⃣0️⃣4️⃣ - Not found</h1>
      <p>The page you&apos;re looking for was not found.</p>
    </div>
  );
};

export default Custom404;
