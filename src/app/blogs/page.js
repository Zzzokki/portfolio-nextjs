"use client";

import { BlogCard } from "@/components/AllBlogs";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles`);

        const data = await res.json();

        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col gap-8 lg:w-[1100px] m-auto py-8">
      <div className="w-full grid grid-cols-3 gap-[24px]">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <BlogCard
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
