import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleMarkRead }) => {
  // console.log(handleBookmark);

  return (
    <div className="m-2">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover_photo} alt="" />
        </figure>

        <div className="card-body p-4 my-5">
          <div className="flex items-center justify-around mb-3 mr-12">
            <p className="text-[16px] font-medium">{blog.author}</p>
            <div className="flex items-center justify-around gap-10">
              <img
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
                src={blog.author_img}
                alt=""
              />

              <button onClick={() => handleBookmark(blog)}
                className="text-gray-400 hover:text-yellow-500 transition-colors focus:outline-none"
                aria-label="Bookmark this post"
              >
                <FaBookmark size={25} />
              </button>
            </div>
          </div>

          <h2 className="card-title text-[18px] font-bold leading-tight mb-2 line-clamp-2">
            {blog.title}
          </h2>

          <div className="flex my-3 justify-around">
            {blog.hashtags.map((hash) => (
              <span key={hash} className="text-[14px] text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors cursor-pointer">
                {hash}
              </span>
            ))}
          </div>

          <div className="card-actions justify-end mt-2">
            <button onClick={() => handleMarkRead(blog.reading_time)} className="btn btn-sm btn-primary rounded-full px-4 text-white font-medium hover:shadow-md transition-shadow">
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
