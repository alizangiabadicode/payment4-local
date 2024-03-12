import React from "react";
import { Button } from "../shared/button";
import { RightArrowIcon } from "../../images/svg";
import dashboardImg from "../../images/dashboard-light.jpg";
import dashboardDarkImg from "../../images/dashboard-dark.png";
import assetsLightImg from "../../images/assets.jpg";
import assetsDarkImg from "../../images/assets-dark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import useDarkMode from "use-dark-mode";

const HeroSection = () => {
  const { value: isDark } = useDarkMode();
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
              Welcome to Payment4
            </p>
            <p
              className={`text-md sm:text-xl font-bold text-center ${
                isDark ? "text-white" : null
              }`}
            >
              Your Cryptocurrency Payment Gateway
            </p>
          </div>
          <div className="max-w-690">
            <p
              className={`text-secondary-text text-center leading-8 ${
                isDark ? "text-white opacity-[44%]" : null
              }`}
            >
              Payment4 welcomes users to a secure cryptocurrency payment
              gateway, simplifying transactions with integrated blockchains like
              Ethereum and Binance Smart Chain.
            </p>
          </div>
        </div>
        <div>
          <Button
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="px-10 py-2 flex gap-x-2"
          >
            Let’s get started
            <RightArrowIcon />
          </Button>
        </div>
        <div>
          {isDark ? (
            <img src={dashboardDarkImg} alt="dashboard" />
          ) : (
            <img src={dashboardImg} alt="dashboard" />
          )}
        </div>
      </div>
      <div className="flex justify-center my-16">
        <p className="text-16 sm:text-24 font-semibold">
          Supported coins and blockchains
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
              <img src={assetsDarkImg} alt="" />
            ) : (
              <img src={assetsLightImg} alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {isDark ? (
              <img src={assetsDarkImg} alt="" />
            ) : (
              <img src={assetsLightImg} alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {isDark ? (
              <img src={assetsDarkImg} alt="" />
            ) : (
              <img src={assetsLightImg} alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {isDark ? (
              <img src={assetsDarkImg} alt="" />
            ) : (
              <img src={assetsLightImg} alt="" />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container sm:hidden my-10">
        {isDark ? (
          <img src={assetsDarkImg} alt="" />
        ) : (
          <img src={assetsLightImg} alt="" />
        )}
      </div>
    </>
  );
};

export default HeroSection;
