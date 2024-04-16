import HeroSection from "@/components/hero-section";
import initTranslations from "../i18n";
import TranslationsProvider from "@/configs/TranslationsProvider";
import Cards from "@/components/cards-section/cards";
import ProgressCards from "@/components/progress-cards.tsx/progress-cards";
import AdvertisementCard from "@/components/advertisement";
import Blogs from "@/components/blog-slider/blogs";
import SliderCards from "@/components/slider-cards/cards";

const i18nNamespaces = ["translation"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="dark:bg-dark bg-white overflow-x-auto">
        <HeroSection />
        <Cards />
        <ProgressCards />
        <div className="sm:hidden my-10 px-16">
          <hr style={{ color: "#E5E5E5" }} />
        </div>
        <div className="flex justify-center">
          <p
            className="text-[16px] sm:text-[24px] font-bold 
              dark:text-white"
          >
            {t("crafting")}
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
    </TranslationsProvider>
  );
}

export default Home;
