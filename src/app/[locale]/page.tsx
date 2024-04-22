import HeroSection from "@/components/hero-section";
import initTranslations from "../i18n";
import Cards from "@/components/cards-section/cards";
import ProgressCards from "@/components/progress-cards.tsx/progress-cards";
import AdvertisementCard from "@/components/advertisement";
import Blogs from "@/components/blog-slider/blogs";
import SliderCards from "@/components/slider-cards/cards";

const i18nNamespaces = ["translation"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className="dark:bg-dark bg-white overflow-x-auto px-[20px] sm:px-0">
      <HeroSection />
      <Cards />
      <ProgressCards />
      <div className="sm:hidden my-10 px-16">
        <hr style={{ color: "#E5E5E5" }} />
      </div>
      <div className="flex justify-center md:mt-[100px]">
        <p
          className="text-[16px] sm:text-[24px] font-bold 
              dark:text-white text-center"
        >
          {t("crafting")}
        </p>
      </div>
      <div className="flex justify-center">
        <SliderCards />
      </div>
      <div className="flex justify-center sm:px-[300px]">
        <AdvertisementCard />
      </div>
      {/* <div className="flex justify-center my-[128px]">
        <Blogs />
      </div> */}
    </div>
  );
}

export default Home;
