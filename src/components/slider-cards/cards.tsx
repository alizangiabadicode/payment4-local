"use client";
import React from "react";
import {
  CreditCardImg,
  DollarIcon,
  ShoppingIcon,
  SupportIcon,
} from "../../../public/images/svg";
import SliderCard from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardsArrayInterface } from "./cards-array-interface";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const SliderCards = () => {
  const { t } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  const cardsArray: CardsArrayInterface[] = [
    {
      lightImageUrl: "/images/global-selling-img.png",
      darkImageUrl: "/images/global-selling-dark-img.png",
      title: t("sliderOne"),
      desc: t("sliderOneDesc"),
      logo: <ShoppingIcon color={isDark === "dark" ? "#FFFFFF" : undefined} />,
    },
    {
      lightImageUrl: "/images/instant-settlement-img.png",
      darkImageUrl: "/images/instant-settlement-dark-img.png",
      title: t("sliderTwo"),
      desc: t("sliderTwoDesc"),
      logo: <CreditCardImg color={isDark === "dark" ? "#FFFFFF" : undefined} />,
    },
    {
      lightImageUrl: "/images/twenty-four-hour-support.png",
      darkImageUrl: "/images/twenty-four-hour-support-dark.png",
      title: t("sliderThree"),
      desc: t("sliderThreeDesc"),
      logo: <SupportIcon color={isDark === "dark" ? "#FFFFFF" : undefined} />,
    },
    {
      lightImageUrl: "/images/crypto-diversity.png",
      darkImageUrl: "/images/crypto-diversity-dark.png",
      title: t("sliderFour"),
      desc: t("sliderFourDesc"),
      logo: <DollarIcon color={isDark === "dark" ? "#FFFFFF" : undefined} />,
    },
  ];

  return (
    <>
      <div className="hidden sm:flex sm:gap-x-5 sm:justify-center sm:my-[30px]">
        {cardsArray.map((card) => (
          <SliderCard
            desc={card.desc}
            lightImageUrl={card.lightImageUrl}
            darkImageUrl={card.darkImageUrl}
            logo={card.logo}
            title={card.title}
            key={card.title}
          />
        ))}
      </div>
      <div className="sm:hidden max-w-[300px] my-16">
        <Swiper spaceBetween={50} slidesPerView={1}>
          {cardsArray.map((card) => (
            <SwiperSlide key={card.title}>
              {
                <SliderCard
                  desc={card.desc}
                  lightImageUrl={card.lightImageUrl}
                  darkImageUrl={card.darkImageUrl}
                  logo={card.logo}
                  title={card.title}
                />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderCards;
