import blogOne from "../../images/blog-post-1.png";
import blogTwo from "../../images/blog-post-2.png";
import blogThree from "../../images/blog-post-3.png";
import blogFour from "../../images/blog-post-4.png";

export interface BlogsArrayInterface {
  title: string;
  imageUrl: string;
}

export const blogsArray: BlogsArrayInterface[] = [
  {
    title: "Trust Wallet Review 2024",
    imageUrl: blogOne,
  },
  {
    title: "15 Best Books For Stock Market",
    imageUrl: blogTwo,
  },
  {
    title: "When Will Bitcoin Hit 100,000?",
    imageUrl: blogThree,
  },
  {
    title: "Is Trust Wallet Safe?",
    imageUrl: blogFour,
  },
];
