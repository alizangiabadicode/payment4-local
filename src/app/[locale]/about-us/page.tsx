import React, { ReactNode } from "react";
import {
  AttachIcon,
  BackSlashIcon,
  CheckCartIcon,
  CheckIconLight,
} from "../../../../public/images/svg";
import { Button } from "../../../components/shared/button";
import Image from "next/image";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/configs/TranslationsProvider";

interface reasonsToChoosePayment4 {
  title: string;
  logo: ReactNode;
  desc: string;
}

const i18nNamespaces = ["translation"];

const AboutUs = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const reasonsToChoosePayment4: reasonsToChoosePayment4[] = [
    {
      title: t("secureAndReliable"),
      logo: <CheckIconLight />,
      desc: t("secureAndReliableDesc"),
    },
    {
      title: t("seamlessIntegration"),
      logo: <BackSlashIcon />,
      desc: t("seamlessIntegrationDesc"),
    },
    {
      title: t("fastAndCostEffective"),
      logo: <CheckCartIcon />,
      desc: t("fastAndCostEffectiveDesc"),
    },
    {
      title: t("innovativeFeatures"),
      logo: <AttachIcon />,
      desc: t("innovativeFeaturesDesc"),
    },
  ];
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex flex-col items-center lg:px-[300px] mt-[20px]">
        <div className="flex flex-col gap-y-[8px] px-5 md:px-0">
          <p
            className="
            dark:text-white text-black
             text-[18px] font-bold text-center"
          >
            {t("payment4Innovating")}
          </p>
          <p
            className="
              text-center text-[13px] 
              dark:text-white  text-black"
          >
            {t("aboutUsDesc")}
          </p>
        </div>
        <div className="px-5 md:px-0 grid grid-rows-2 grid-cols-3 md:grid-rows-1 md:grid-cols-4  justify-items-center gap-10 mt-[40px] mb-[90px]">
          <div className="flex flex-col items-center">
            <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+100</p>
            <p>{t("registered")}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+20000</p>
            <p>{t("paymentDaily")}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+1000</p>
            <p>{t("merchant")}</p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center">
            <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+200</p>
            <p>{t("teamMembers")}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-5">
          <div className="flex flex-col md:w-1/2 px-5 md:px-0">
            <p
              className="
              dark:text-white  text-black
               text-[18px] md:text-[24px] font-bold"
            >
              {t("ourMission")}
            </p>
            <p className="dark:text-white text-black text-[16px]">
              {t("ourMissionDesc")}
            </p>
          </div>
          <div className="px-5">
            <Image
              width={300}
              height={300}
              src="/images/about-mission.png"
              alt=""
            />
          </div>
        </div>
        <div className="px-5 md:px-0 flex flex-col gap-y-5 mt-5 items-center">
          <div>
            <p
              className="
              dark:text-white  text-black
               text-[18px] md:text-[24px] font-bold"
            >
              {t("whyChoosePayment4")}
            </p>
          </div>
          <div className="flex flex-col gap-y-5 md:grid grid-cols-2 md:gap-x-[195px] md:gap-y-[67px]">
            {reasonsToChoosePayment4.map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="flex gap-x-2">
                  {item.logo}
                  <p
                    className="
                    font-semibold dark:text-white text-black
                     text-[14px] md:text-[16px]"
                  >
                    {item.title}
                  </p>
                </div>
                <div>
                  <p
                    className="
                      dark:text-white text-black
                     text-[12px] md:text-[14px]"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[10px] my-[100px]">
          <div
            className="rounded-[8px] 
              dark:bg-dark-gradient-card bg-light-gradient
             pt-[40px] px-[70px] pb-[50px] flex flex-col items-center gap-y-[20px]"
          >
            <p
              className="
                dark:text-white text-black
               text-[18px] md:text-[20px] font-semibold"
            >
              {t("readyToGetStarted")}
            </p>
            <p
              className="text-[12px] md:text-[14px]
                dark:text-[#FFFFFFC7]text-[#121212C7] opacity-[78%]"
            >
              {t("JoinTheBusinesses")}
            </p>
            <div>
              <Button className="px-[64px] py-[5px] rounded-[8px]">
                {t("joinUs")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default AboutUs;
