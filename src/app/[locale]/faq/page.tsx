import React from "react";
import FaqItem from "@/components/shared/faq.collapsible.window.tsx";
import initTranslations from "@/app/i18n";
import { utmTrackingServerSide } from "@/utils/server.side.utm.track";

const FAQ = async ({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { t } = await initTranslations(locale, ["faq"]);
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
  trackUser();
  return (
    <div className="container px-5 md:px-0 flex flex-col gap-y-[30px] my-[50px] max-w-4xl">
      {[...Array(8).keys()].map((idx) => (
        <FaqItem
          key={idx}
          question={t(`q${idx + 1}.q`)}
          answer={t(`q${idx + 1}.a`)}
        />
      ))}
    </div>
  );
};

export default FAQ;
