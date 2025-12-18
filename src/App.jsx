import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Blogs from "./Component/Blogs/Blogs";

function App() {
  
  const [bookmarked, setBookmarked] = useState([]);
  const [readTime, setReadTime] = useState(0);


  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };
  


  const handleMarkRead = (time, id) => {
    const newTime = readTime + time;
    setReadTime(newTime);
    // console.log(id);
    handleRemoveBookmark(id);
  }

  const handleRemoveBookmark =(id) => {
    const remaining = bookmarked.filter(mark => mark.id !== id);
    setBookmarked(remaining);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main_container flex text-center my-3">
        <div className="left_container w-[70%] border-r-2 border-gray-300">
          <Blogs handleBookmark={handleBookmark} handleMarkRead={handleMarkRead}></Blogs>
        </div>

        <div className="right_container w-[30%] border-r-2 border-gray-300">
          <h1 className=" text-3xl mb-2">Selected Blogs</h1>

          <div className=" text-xl my-5">
            <h3>Reading Time: {readTime}</h3>
            <h3>Bookmarked Count: {bookmarked.length}</h3>
            {
              bookmarked.map((marked) => (
                <div key={marked.id} className="border border-gray-300 bg-red-700 rounded-md p-2 m-2">
                  <h4 className="text-lg font-medium">{marked.title}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
