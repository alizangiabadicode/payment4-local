"use client";

import React from "react";
import Blog from "./blog";
import { Swiper, SwiperSlide } from "swiper/react";
import { t } from "i18next";

export interface BlogsArrayInterface {
  title: string;
  imageUrl: string;
}

export const blogsArray: BlogsArrayInterface[] = [
  {
    title: t("blogTitleOne"),
    imageUrl: "/../../../public/images/blog-post-1.png",
  },
  {
    title: t("blogTitleTwo"),
    imageUrl: "/../../../public/images/blog-post-2.png",
  },
  {
    title: t("blogTitleThree"),
    imageUrl: "/../../../public/images/blog-post-3.png",
  },
  {
    title: t("blogTitleFour"),
    imageUrl: "/../../../public/images/blog-post-4.png",
  },
];

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
