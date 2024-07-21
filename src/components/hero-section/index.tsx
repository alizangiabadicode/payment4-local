"use client";

import React from "react";
import { Button } from "../shared/button";
import { LeftArrowIcon, RightArrowIcon } from "../../icons/svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { SwiperSection } from "./swiper";
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";

const HeroSection = () => {
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source } = queryParams;
  const { t, i18n } = useTranslation();
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col items-center mt-10 gap-y-10">
        <div className="flex flex-col items-center gap-y-5">
          <div className="flex flex-col items-center relative">
            <p
              className={`text-[20px] sm:text-[40px] font-bold dark:text-white text-center
               text-black`}
            >
              {t("welcomeToPayment4")}
            </p>
            <p
              className={`text-[20px] sm:text-[40px] font-bold text-center
               dark:text-white text-black`}
            >
              {t("yourCryptocurrencyPaymentGateway")}
            </p>
            <div className="hidden xl:block">
              <div className="absolute top-[0] left-[-110px]">
                <Image
                  className="dark:hidden block"
                  width={70}
                  height={70}
                  src="/images/tron-light.png"
                  alt=""
                />
                <Image
                  className="dark:block hidden"
                  width={70}
                  height={70}
                  src="/images/tron-dark.png"
                  alt=""
                />
              </div>
              <div className="absolute top-[170px] left-[-50px]">
                <Image
                  className="dark:hidden block"
                  width={70}
                  height={70}
                  src="/images/ethereum-light.png"
                  alt=""
                />
                <Image
                  className="dark:block hidden"
                  width={70}
                  height={70}
                  src="/images/ethereum-dark.png"
                  alt=""
                />
              </div>
              <div className="absolute top-[0] right-[-110px]">
                <Image
                  quality={100}
                  className="dark:hidden block"
                  width={70}
                  height={70}
                  src="/images/USDT-light.png"
                  alt=""
                />
                <Image
                  className="dark:block hidden"
                  width={70}
                  height={70}
                  src="/images/USDT-dark.png"
                  alt=""
                />
              </div>
              <div className="absolute top-[170px] right-[-50px]">
                <Image
                  className="dark:hidden block"
                  width={70}
                  height={70}
                  src="/images/bitcoin-light.png"
                  alt=""
                />
                <Image
                  className="dark:block hidden"
                  width={70}
                  height={70}
                  src="/images/bitcoin-dark.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-w-[700px]">
            <p
              className={`text-[13px] md:text-[16px] 
              text-center leading-[23px] 
              md:leading-8 dark:text-[#B5B5B5]  text-[#717171]`}
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
            <Link
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${
                i18n.language
              }${utm_campaign ? `&utm_campaign=${utm_campaign}` : ""}${
                utm_medium ? `&utm_medium=${utm_medium}` : ""
              }${utm_source ? `&utm_source=${utm_source}` : ""}`}
            >
              {i18n.language === "fa"
                ? t("heroSectionLetsGetStarted")
                : t("letsGetStarted")}
            </Link>
            {i18n.dir() === "ltr" ? <RightArrowIcon /> : <LeftArrowIcon />}
          </Button>
        </div>
        <div>
          <Image
            className="dark:block hidden"
            width={700}
            height={500}
            src="/images/dashboard-dark.png"
            alt={
              i18n.language !== "fa"
                ? "dashboard"
                : "بهترین درگاه پرداخت بین المللی برای سایت"
            }
          />
          <Image
            className="block dark:hidden"
            width={700}
            height={500}
            src="/images/dashboard.jpg"
            alt={
              i18n.language !== "fa"
                ? "dashboard"
                : "بهترین درگاه پرداخت بین المللی برای سایت"
            }
          />
        </div>
      </div>
      <div className="flex justify-center mt-[100px]">
        <p className="text-[16px] sm:text-[24px] font-semibold">
          {t("supportedCoinsAndBlockchains")}
        </p>
      </div>
      <SwiperSection />
    </div>
  );
};

export default HeroSection;
