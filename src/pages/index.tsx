import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import HeroSection from "../components/hero-section";
import Cards from "../components/cards-section/cards";
import ProgressCards from "../components/progress-cards.tsx/progress-cards";
import SliderCards from "../components/slider-cards/cards";
import AdvertisementCard from "../components/advertisement";
import Blogs from "../components/blog-slider/blogs";
import useDarkMode from "use-dark-mode";

const IndexPage: React.FC<PageProps> = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className={` ${isDark ? "bg-dark" : "bg-white"}`}>
      <HeroSection />
      <Cards />
      <ProgressCards />
      <div className="sm:hidden my-10 px-16">
        <hr style={{ color: "#E5E5E5" }} />
      </div>
      <div className="flex justify-center">
        <p
          className={`text-[16px] sm:text-[24px] font-bold ${
            isDark ? "text-white" : null
          }`}
        >
          Crafting Payments for Every Business Case
        </p>
      </div>
      <div className="flex justify-center">
        <SliderCards />
      </div>
      <div className="flex justify-center">
        <AdvertisementCard />
      </div>
      <div className="flex justify-center my-[128px]">
        <Blogs />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>payment 4</title>;
