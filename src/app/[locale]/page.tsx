import HeroSection from "@/components/hero-section";
import initTranslations from "../i18n";
import Cards from "@/components/cards-section/cards";
import ProgressCards from "@/components/progress-cards/progress-cards";
import AdvertisementCard from "@/components/advertisement";
import SliderCards from "@/components/slider-cards/cards";
import { utmTrackingServerSide } from "@/utils/server.side.utm.tracker";
import { VideoSection } from "@/components/video.section";

const i18nNamespaces = ["translation"];

async function Home({
    params: { locale },
    searchParams,
}: {
    params: { locale: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const { t, i18n } = await initTranslations(locale, i18nNamespaces);
    const {
        utm_campaign: utmCampaign,
        utm_medium: utmMedium,
        utm_source: utmSource,
    } = searchParams as {
        [key: string]: string | undefined;
    };
    const trackUser = async () => {
        try {
            await utmTrackingServerSide(utmCampaign, utmMedium, utmSource);
        } catch (error) {
            console.error("Error tracking user:", error);
        }
    };
    if (utmCampaign || utmMedium || utmSource) {
        trackUser();
    }
    return (
        <div className="overflow-x-auto px-[20px] sm:px-0 container">
            <HeroSection />
            <Cards />
            {i18n.language !== "fa" ? null : (
                <div className="w-full mx-auto max-w-[700px] my-[130px]">
                    <p className="text-center my-6 text-[24px]">چگونه در Payment4درگاه پرداخت ارز دیجیتال بسازیم؟</p>
                    {<VideoSection />}
                </div>
            )}
            {i18n.language !== "fa" && <ProgressCards />}
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
            <div className="flex justify-center sm:px-[50px]">
                <AdvertisementCard />
            </div>
            {/* <div className="flex justify-center my-[128px]">
        <Blogs />
      </div> */}
        </div>
    );
}

export default Home;
