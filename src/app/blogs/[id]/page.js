"use client";

import { useParams } from "next/navigation";

const BlogPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
};

export default BlogPage;
