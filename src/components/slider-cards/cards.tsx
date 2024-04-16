"use client"
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
import { CardsArrayInterface } from "./cards-array";
import { useTheme } from "next-themes";
import { t } from "i18next";
const SliderCards = () => {
  const { resolvedTheme: isDark } = useTheme();
  const cardsArray: CardsArrayInterface[] = [
    {
      imageUrl: isDark
        ? "/../../../public/images/global-selling-dark-img.png"
        : "/../../../public/images/global-selling-img.png",
      title: t("sliderOne"),
      desc: t("sliderOneDesc"),
      logo: <ShoppingIcon color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark
        ? "/../../../public/images/instant-settlement-dark-img.png"
        : "/../../../public/images/instant-settlement-img.png",
      title: t("sliderTwo"),
      desc: t("sliderTwoDesc"),
      logo: <CreditCardImg color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark
        ? "/../../../public/images/twenty-four-hour-support-dark.png"
        : "/../../../public/images/twenty-four-hour-support.png",
      title: t("sliderThree"),
      desc: t("sliderThreeDesc"),
      logo: <SupportIcon color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark
        ? "/../../../public/images/crypto-diversity-dark.png"
        : "/../../../public/images/crypto-diversity.png",
      title: t("sliderFour"),
      desc: t("sliderFourDesc"),
      logo: <DollarIcon color={isDark ? "#FFFFFF" : undefined} />,
    },
  ];

  return (
    <div>
      <div className="hidden sm:flex sm:gap-x-5 sm:justify-center sm:my-16">
        {cardsArray.map((card) => (
          <SliderCard
            desc={card.desc}
            imageUrl={card.imageUrl}
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
                  imageUrl={card.imageUrl}
                  logo={card.logo}
                  title={card.title}
                />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderCards;
