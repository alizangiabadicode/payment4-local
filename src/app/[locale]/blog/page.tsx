"use client";
import { BlogCard, Snackbar } from "@/components/shared";
import { Post } from "@/types/blog-post-types";
import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);

  const fetchData = async () => {
    const data = JSON.stringify({
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

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://blog.payment4.com/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      setLoading(true);
      const response = await axios.request(config);
      setPosts(response.data.data.posts.edges);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsOpenSnackBar(true);
      return [];
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Snackbar
        isOpen={isOpenSnackBar}
        message="something happened while showing blogs"
        onClose={() => setIsOpenSnackBar(false)}
        variant="warning"
      />
      {loading ? (
        <div className="container">
          <p>loading ...</p>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Blogs;
