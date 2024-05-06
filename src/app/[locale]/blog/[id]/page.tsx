"use client";

import { Post } from "@/types/blog-post-types";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./post.css";
import { BlogPreview, SearchBar } from "@/components/shared";
import { RightArrowNavigate } from "../../../../../public/images/svg";

type ExtendedPost = Omit<Post, "node"> & {
  post: Post["node"] & {
    content: string;
  };
};

export default function Blog({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<ExtendedPost>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    let data = JSON.stringify({
      query: `query getPost {
      post(id: "${params.id}") {
            date
            uri
            content
            title
            id
            featuredImage {
              node {
                mediaItemUrl
              }
            }
      }
    }`,
      variables: {},
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://blog.payment4.com/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setPost(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  useEffect(() => {
    let data = JSON.stringify({
      query: `query getPosts {
            posts(where: {orderby: {field: DATE, order: DESC}}) {
               edges {
                cursor
                node {
                  date
                  uri
                  title
                  id
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }`,
      variables: {},
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://blog.payment4.com/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setPosts(response.data.data.posts.edges);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="grid grid-cols-5 px-[30px]">
      <div
        className="flex flex-col gap-y-[20px] my-[20px] col-start-1 col-end-6  
      md:col-start-1 md:col-end-4 "
      >
        <div className="px-[20px]">
          <Image
            loader={() => post?.post.featuredImage.node.mediaItemUrl!}
            src={post?.post.featuredImage?.node.mediaItemUrl!}
            width={577}
            height={577}
            alt="blog image"
            className="rounded-[8px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="px-[20px]">{post?.post.title}</p>
          <div
            className="custom-content"
            dangerouslySetInnerHTML={{ __html: post?.post.content || "" }}
          ></div>
        </div>
      </div>
      <div className="hidden md:col-start-4 md:col-end-6 md:flex flex-col gap-y-[20px]">
        <div
          className="flex flex-col dark:rtl:bg-dark-gradient-sidebar-post-rtl
         dark:ltr:bg-dark-gradient-sidebar-post ltr:bg-light-gradient-sidebar-post 
         rtl:bg-light-gradient-sidebar-post-rtl
         p-[10px] rounded-[8px]"
        >
          <p className="font-semibold text-[16px]">Other Blog</p>
          <div className="my-[10px]">
            <hr />
          </div>
          <div className="flex flex-col gap-y-[10px] ">
            {posts.map((post) => (
              <BlogPreview
                href={post.node.id}
                imageUrl={post.node.featuredImage?.node.mediaItemUrl}
                title={post.node.title}
                key={post.node.id}
              />
            ))}
          </div>
        </div>
        <div
          className="flex flex-col dark:rtl:bg-dark-gradient-sidebar-post-rtl
         dark:ltr:bg-dark-gradient-sidebar-post 
         ltr:bg-light-gradient-sidebar-post 
         rtl:bg-light-gradient-sidebar-post-rtl
         p-[10px] rounded-[8px]"
        >
          <p className="font-semibold text-[16px]">Search</p>
          <div className="my-[10px]">
            <hr />
          </div>
          <SearchBar />
        </div>
        <div
          className="flex flex-col dark:rtl:bg-dark-gradient-sidebar-post-rtl
         dark:ltr:bg-dark-gradient-sidebar-post 
         ltr:bg-light-gradient-sidebar-post 
         rtl:bg-light-gradient-sidebar-post-rtl
         p-[10px] rounded-[8px]"
        >
          <p className="font-semibold text-[16px]">Categories</p>
          <div className="my-[10px]">
            <hr />
          </div>
          <div className="flex flex-col px-[10px] gap-y-[10px]">
            <div className="flex items-center justify-between py-[5px]">
              <p className="text-[14px] dark:text-[#FFFFFFC7]">Category 1</p>
              <div className="cursor-pointer">
                <RightArrowNavigate />
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className="flex items-center justify-between py-[5px]">
              <p className="text-[14px] dark:text-[#FFFFFFC7]">Category 2</p>
              <div className="cursor-pointer">
                <RightArrowNavigate />
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className="flex items-center justify-between py-[5px]">
              <p className="text-[14px] dark:text-[#FFFFFFC7]">Category 3</p>
              <div className="cursor-pointer">
                <RightArrowNavigate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
