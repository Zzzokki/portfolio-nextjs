"use client";

import { useEffect, useState } from "react";

const categories = [
  "All",
  "React",
  "JavaScript",
  "Python",
  "Web Development",
  "Node.js",
];

export const AllBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [category, setCategory] = useState("Python");
  const [perPage, setPerPage] = useState(9);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(9);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${
            category !== "All" ? `&tag=${category}` : ""
          }`
        );

        const data = await res.json();

        setBlogs(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category, perPage]);

  return (
    <div className="flex flex-col gap-8 lg:w-[1100px] m-auto py-8">
      <h1 className="font-bold text-2xl">All Blog Post</h1>

      <div className="flex gap-5">
        {categories.map((item) => (
          <button
            key={item}
            className="px-2 py-1 bg-gray-200 dark:bg-slate-800 rounded-md"
            style={{
              color: category === item ? "#4B6BFB" : "",
            }}
            onClick={() => handleCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="w-full grid grid-cols-3 gap-[24px]">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
            tags={blog.tag_list}
          />
        ))}
      </div>

      <button
        className="m-auto w-[200px] py-2 bg-[#4B6BFB] text-white rounded-md"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading...</p> : <p>Load More</p>}
      </button>
    </div>
  );
};

const BlogCard = ({ image, title, date, tags }) => {
  return (
    <div className="border p-4 flex flex-col gap-4 w-full rounded-md bg-white">
      <img src={image} alt="image" className="aspect-[2/1] w-full rounded-md" />

      <div className="py-2 flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <BlogTag key={tag} tag={tag} />
          ))}
        </div>

        <h3 className="font-semibold text-2xl">{title}</h3>

        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

const BlogTag = ({ tag }) => {
  return (
    <div className="bg-[#4b6bfb0d] py-1 px-[10px] rounded-md">
      <p className="text-[#4B6BFB] font-medium text-md capitalize">{tag}</p>
    </div>
  );
};
