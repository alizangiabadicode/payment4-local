import React from "react";
import { BlogsArrayInterface } from "./blogs-array";

const Blog = (props: BlogsArrayInterface) => {
  return (
    <div className="flex flex-col justify-start gap-y-[10px]">
      <div>
        <img src={props.imageUrl} alt="blogImg" />
      </div>
      <div>
        <p className="text-[16px] font-bold">{props.title}</p>
      </div>
    </div>
  );
};

export default Blog;
