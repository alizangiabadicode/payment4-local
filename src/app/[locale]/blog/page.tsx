"use client";
import { BlogCard } from "@/components/shared";
import { Post } from "@/types/blog-post-types";
import axios from "axios";
import { useEffect, useState } from "react";


const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 
    justify-items-center gap-y-[40px] px-[15px] my-[30px]"
    >
      {posts.map((post) => (
        <BlogCard
          href={post.node.id}
          title={post.node.title}
          imageUrl={post.node.featuredImage?.node.mediaItemUrl}
          key={post.node.id}
        />
      ))}
    </div>
  );
};

export default Blogs;
