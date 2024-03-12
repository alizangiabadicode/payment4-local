import React from "react";
import { blogsArray } from "./blogs-array";
import Blog from "./blog";
import { Swiper, SwiperSlide } from "swiper/react";

const Blogs = () => {
  return (
    <>
      <div className="hidden sm:flex justify-center">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-[33px]">
          {blogsArray.map((blog) => (
            <Blog
              imageUrl={blog.imageUrl}
              title={blog.title}
              key={blog.title}
            />
          ))}
        </div>
      </div>
      <div className="sm:hidden max-w-[300px]">
        <Swiper spaceBetween={50} slidesPerView={1}>
          {blogsArray.map((blog) => (
            <SwiperSlide key={blog.title}>
              <Blog imageUrl={blog.imageUrl} title={blog.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Blogs;
