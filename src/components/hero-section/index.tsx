"use client";
import React from "react";
import { Button } from "../shared/button";
import { RightArrowIcon } from "../../../public/images/svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import { t } from "i18next";

const HeroSection = () => {
  const { resolvedTheme: isDark } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-y-10">
        <div className="flex flex-col items-center gap-y-5">
          <div className="flex flex-col items-center">
            <p
              className={`text-md sm:text-xl font-bold ${
                isDark ? "text-white" : null
              }`}
            >
              {t("welcomeToPayment4")}
            </p>
            <p
              className={`text-md sm:text-xl font-bold text-center ${
                isDark ? "text-white" : null
              }`}
            >
              {t("yourCryptocurrencyPaymentGateway")}
            </p>
          </div>
          <div className="max-w-690">
            <p
              className={`text-secondary-text text-center leading-8 ${
                isDark ? "text-white opacity-[44%]" : null
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
          {isDark ? (
            <Image
              width={100}
              height={100}
              src="/images/dashboard-dark.png"
              alt="dashboard"
            />
          ) : (
            <Image
              width={100}
              height={100}
              src="/images/dashboard-light.jpg"
              alt="dashboard"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center my-16">
        <p className="text-16 sm:text-24 font-semibold">
          {t("supportedCoinsAndBlockchains")}
        </p>
      </div>
      <div className="container hidden sm:block my-10">
        <Swiper
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={2}
        >
          <SwiperSlide>
            {isDark ? (
              <Image
                width={100}
                height={100}
                src="/images/assets-dark.png"
                alt=""
              />
            ) : (
              <Image width={100} height={100} src="/images/assets.jpg" alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {isDark ? (
              <Image
                width={100}
                height={100}
                src="/images/assets-dark.png"
                alt=""
              />
            ) : (
              <Image width={100} height={100} src="/images/assets.jpg" alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {isDark ? (
              <Image
                width={100}
                height={100}
                src="/images/assets-dark.png"
                alt=""
              />
            ) : (
              <Image width={100} height={100} src="/images/assets.jpg" alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {isDark ? (
              <Image
                width={100}
                height={100}
                src="/images/assets-dark.png"
                alt=""
              />
            ) : (
              <Image width={100} height={100} src="/images/assets.jpg" alt="" />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container sm:hidden my-10">
        {isDark ? (
          <Image width={100} height={100} src="/images/assets-dark.png" alt="" />
        ) : (
          <Image width={100} height={100} src="/images/assets.jpg" alt="" />
        )}
      </div>
    </>
  );
};

export default HeroSection;
