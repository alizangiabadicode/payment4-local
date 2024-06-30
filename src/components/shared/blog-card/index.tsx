import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProp {
  imageUrl: string;
  title: string;
  href: string;
  link: string;
}

export const BlogCard: React.FC<BlogCardProp> = (props: BlogCardProp) => {
  return (
    <div className="bg-transparent flex flex-col max-w-[230px]">
      {/* <Link passHref href={`${props.link}`}> */}
      {/* <Link href={`/blog/${props.href}`}> */}
      <a href={`${props.link}`} target="_blank">
        <Image
          loader={() => props.imageUrl}
          src={props.imageUrl}
          alt="blog image"
          width={230}
          height={230}
          className="rounded-[8px]"
        />
        <p
          className="dark:text-[#FFFFFFDE] text-[#121212DE] text-[16px] mt-[10px]
      font-semibold"
        >
          {props.title}
        </p>
      </a>
      {/* </Link> */}
    </div>
  );
};
