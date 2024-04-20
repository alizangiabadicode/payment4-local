"use client";

import React from "react";
import { Button } from "../shared/button";
import { RightArrowIcon } from "../../../public/images/svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { SwiperSection } from "./swiper";

const HeroSection = () => {
  const { t } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-y-10">
        <div className="flex flex-col items-center gap-y-5">
          <div className="flex flex-col items-center">
            <p
              className={`text-[20px] sm:text-[40px] font-bold ${
                isDark === "dark" ? "text-white" : "text-black"
              }`}
            >
              {t("welcomeToPayment4")}
            </p>
            <p
              className={`text-[20px] sm:text-[40px] font-bold text-center ${
                isDark === "dark" ? "text-white" : "text-black"
              }`}
            >
              {t("yourCryptocurrencyPaymentGateway")}
            </p>
          </div>
          <div className="max-w-[700px]">
            <p
              className={`text-secondary-text text-center leading-8 ${
                isDark === "dark" ? "text-white opacity-[44%]" : "text-black"
              }`}
            >
              {t("payment4WelcomesUsers")}
            </p>
          </div>
        </div>
        <div>
          <Button
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="px-10 py-2 flex gap-x-2"
          >
            {t("letsGetStarted")}
            <RightArrowIcon />
          </Button>
        </div>
        <div>
          {isDark === "dark" ? (
            <Image
              width={700}
              height={500}
              src="/images/dashboard-dark.png"
              alt="dashboard"
            />
          ) : (
            <Image
              width={700}
              height={500}
              src="/images/dashboard.jpg"
              alt="dashboard"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center my-16">
        <p className="text-[16px] sm:text-[24px] font-semibold">
          {t("supportedCoinsAndBlockchains")}
        </p>
      </div>
      <SwiperSection />
      <div className="container sm:hidden my-10">
        {isDark === "dark" ? (
          <Image
            width={100}
            height={100}
            src="/images/assets-dark.png"
            alt=""
          />
        ) : (
          <Image width={100} height={100} src="/images/assets.jpg" alt="" />
        )}
      </div>
    </>
  );
};

export default HeroSection;
