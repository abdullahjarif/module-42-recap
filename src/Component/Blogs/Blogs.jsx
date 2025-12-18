import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleMarkRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  //   console.log(blogs);

  return (
    <div>
      <h1 className=" text-3xl">Total Blogs: {blogs.length}</h1>
      <div className="all_blogs m-10 grid grid-cols-2">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} handleBookmark={handleBookmark} handleMarkRead={handleMarkRead}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
