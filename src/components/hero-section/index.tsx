"use client";

import React from "react";
import { Button } from "../shared/button";
import { RightArrowIcon } from "../../../public/images/svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { SwiperSection } from "./swiper";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col items-center mt-10 gap-y-10">
        <div className="flex flex-col items-center gap-y-5">
          <div className="flex flex-col items-center relative">
            <p
              className={`text-[20px] sm:text-[40px] font-bold dark:text-white 
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
              className={`text-secondary-text text-center leading-8 
              dark:text-white  dark:text-opacity-[44%] text-black`}
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
          <Image
            className="dark:block hidden"
            width={700}
            height={500}
            src="/images/dashboard-dark.png"
            alt="dashboard"
          />
          <Image
            className="block dark:hidden"
            width={700}
            height={500}
            src="/images/dashboard.jpg"
            alt="dashboard"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[100px]">
        <p className="text-[16px] sm:text-[24px] font-semibold">
          {t("supportedCoinsAndBlockchains")}
        </p>
      </div>
      <SwiperSection />
      <div className="container sm:hidden my-10">
        <Image
          className="dark:block hidden"
          width={1000}
          height={100}
          src="/images/assets-dark.png"
          alt=""
        />
        <Image
          className="block dark:hidden"
          width={1000}
          height={100}
          src="/images/assets.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
