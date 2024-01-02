import React from "react";
import blogimg from "../assets/airforce.webp";
const Blogs = () => {
  const blog = [
    { id: 1, title: "combat Readyness", img: {} },
    { id: 2, title: "combat Readyness", img: {} },
    { id: 3, title: "combat Readyness", img: {} },
    { id: 4, title: "combat Readyness", img: {} },
  ];
  return (
    <div id="faq">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
          Combat Readyness Is
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Combat ready soldiers save lives and increase the chance of mission
          success.
        </p>
      </div>
      {/*all blogs*/}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mx-11">
        {blog.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blogimg}
              alt="blog-img"
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white bg-transparent shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3>{blog.title}</h3>

              <button className="btn-primary">Register</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
