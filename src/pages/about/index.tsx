import React, { ReactNode } from "react";
import aboutMissionImg from "../../images/about-mission.png";
import {
  AttachIcon,
  BackSlashIcon,
  CheckCartIcon,
  CheckIconLight,
} from "../../images/svg";
import useDarkMode from "use-dark-mode";
import { Button } from "../../components/shared/button";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

interface reasonsToChoosePayment4 {
  title: string;
  logo: ReactNode;
  desc: string;
}

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

const AboutUs = () => {
  const { value: isDark } = useDarkMode();
  const { i18n } = useTranslation();
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div
      style={{ direction }}
      className="flex flex-col items-center lg:px-[300px] mt-[20px]"
    >
      <div className="flex flex-col gap-y-[8px] px-5 md:px-0">
        <p
          className={`${
            isDark ? "text-white" : "text-black"
          } text-[18px] font-bold text-center`}
        >
          {t("payment4Innovating")}
        </p>
        <p
          className={`${
            isDark ? "text-white" : "text-black"
          } text-center text-[13px] `}
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
            className={`${
              isDark ? "text-white" : "text-black"
            } text-[18px] md:text-[24px] font-bold`}
          >
            {t("ourMission")}
          </p>
          <p className={`${isDark ? "text-white" : "text-black"} text-[16px]`}>
            {t("ourMissionDesc")}
          </p>
        </div>
        <div className="px-5">
          <img src={aboutMissionImg} alt="" />
        </div>
      </div>
      <div className="px-5 md:px-0 flex flex-col gap-y-5">
        <div>
          <p
            className={`${
              isDark ? "text-white" : "text-black"
            } text-[18px] md:text-[24px] font-bold`}
          >
            {t("whyChoosePayment4")}
          </p>
        </div>
        <div className="flex flex-col gap-y-5 md:grid grid-cols-2 md:gap-x-[195px] md:gap-y-[67px]">
          {reasonsToChoosePayment4.map((item) => (
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                {item.logo}
                <p
                  className={`${
                    isDark ? "text-white" : "text-black"
                  } text-[14px] md:text-[16px] font-semibold`}
                >
                  {item.title}
                </p>
              </div>
              <div>
                <p
                  className={`${
                    isDark ? "text-white" : "text-black"
                  } text-[12px] md:text-[14px]`}
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
          className={`rounded-[8px] ${
            isDark ? "bg-[#151518]" : "bg-light-gradient"
          } pt-[40px] px-[70px] pb-[50px] flex flex-col items-center gap-y-[20px]`}
        >
          <p
            className={`${
              isDark ? "text-white" : "text-black"
            } text-[18px] md:text-[20px] font-semibold`}
          >
            {t("readyToGetStarted")}
          </p>
          <p
            className={`text-[12px] md:text-[14px] ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
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
  );
};

export default AboutUs;
