"use client";

import React from "react";
import { BlogsArrayInterface } from "./blogs";
import Image from "next/image";
import { useTheme } from "next-themes";

const Blog = (props: BlogsArrayInterface) => {
  const { resolvedTheme: isDark } = useTheme();
  return (
    <div className="flex flex-col justify-start gap-y-[10px]">
      <div>
        <Image width={100} height={100} src={props.imageUrl} alt="blogImg" />
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
