import React from "react";
import { BlogsArrayInterface } from "./blogs-array";
import useDarkMode from "use-dark-mode";

const Blog = (props: BlogsArrayInterface) => {
  const { value: isDark } = useDarkMode();
  return (
    <div className="flex flex-col justify-start gap-y-[10px]">
      <div>
        <img src={props.imageUrl} alt="blogImg" />
      </div>
      <div>
        <p
          className={`text-[16px] font-bold ${
            isDark ? "text-white opacity-[87%]" : null
          }`}
        >
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default Blog;
