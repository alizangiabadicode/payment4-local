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
import Image from "next/image";

const SliderCards = () => {
  const { t } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  const cardsArray: CardsArrayInterface[] = [
    {
      lightImageUrl: "/images/global-selling-img.png",
      darkImageUrl: "/images/global-selling-dark-img.png",
      title: t("sliderOne"),
      desc: t("sliderOneDesc"),
      logo: <ShoppingIcon color={isDark === "dark" ? "#FFFFFF" : "#864AFF"} />,
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
      <div className="hidden md:flex sm:gap-x-5 sm:justify-center sm:my-[30px]">
        {/* {cardsArray.map((card) => (
          <SliderCard
            desc={card.desc}
            lightImageUrl={card.lightImageUrl}
            darkImageUrl={card.darkImageUrl}
            logo={card.logo}
            title={card.title}
            key={card.title}
          />
        ))} */}
        <div
          className={`
         dark:bg-[#17171a] 
       w-[275px] bg-[#12121208] rounded-[8px] min-h-[384px] flex flex-col justify-around items-center`}
        >
          <div className="w-[196px] mt-[40px]  flex">
            <Image
              className="dark:hidden block"
              width={196}
              height={143}
              src={cardsArray[0].lightImageUrl}
              alt=""
            />
            <Image
              className="hidden dark:block"
              width={196}
              height={143}
              src={cardsArray[0].darkImageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col px-[32px] gap-y-2 mt-[10px]">
            <div className="flex items-center gap-x-2">
              {cardsArray[0].logo}
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[14px] sm:text-[16px] font-bold`}
              >
                {cardsArray[0].title}
              </p>
            </div>
            <div>
              <p
                className={`text-[12px] 
               dark:text-[#FFFFFF5C] text-[#1212128F] text-opacity-[36%]
            }`}
              >
                {cardsArray[0].desc}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`
         dark:bg-[#17171a] 
       w-[275px] bg-[#12121208] rounded-[8px] min-h-[384px] flex flex-col justify-around items-center`}
        >
          <div className="w-[196px] mt-[40px] flex">
            <Image
              className="dark:hidden block"
              width={196}
              height={143}
              src={cardsArray[1].lightImageUrl}
              alt=""
            />
            <Image
              className="hidden dark:block"
              width={196}
              height={143}
              src={cardsArray[1].darkImageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col px-[32px] gap-y-2 md:mt-[40px]">
            <div className="flex items-center gap-x-2">
              {cardsArray[1].logo}
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[14px] sm:text-[16px] font-bold`}
              >
                {cardsArray[1].title}
              </p>
            </div>
            <div>
              <p
                className={`text-[12px] 
               dark:text-[#FFFFFF5C] text-[#1212128F] text-opacity-[36%]
            }`}
              >
                {cardsArray[1].desc}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`
         dark:bg-[#17171a] 
       w-[275px] bg-[#12121208] rounded-[8px] min-h-[384px] flex flex-col justify-around items-center`}
        >
          <div className="w-[175px] mt-[40px]  flex">
            <Image
              className="dark:hidden block"
              width={185}
              height={131}
              src={cardsArray[2].lightImageUrl}
              alt=""
            />
            <Image
              className="hidden dark:block"
              width={195}
              height={111}
              src={cardsArray[2].darkImageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col px-[32px] gap-y-2 mb-2">
            <div className="flex items-center gap-x-2">
              {cardsArray[2].logo}
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[14px] sm:text-[16px] font-bold`}
              >
                {cardsArray[2].title}
              </p>
            </div>
            <div>
              <p
                className={`text-[12px] 
               dark:text-[#FFFFFF5C] text-[#1212128F] text-opacity-[36%]
            }`}
              >
                {cardsArray[2].desc}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`
         dark:bg-[#17171a] 
       w-[275px] bg-[#12121208] rounded-[8px] min-h-[384px] flex flex-col justify-around items-center`}
        >
          <div className="w-[175px] mt-[40px]  flex">
            <Image
              className="dark:hidden block"
              width={185}
              height={131}
              src={cardsArray[3].lightImageUrl}
              alt=""
            />
            <Image
              className="hidden dark:block"
              width={195}
              height={111}
              src={cardsArray[3].darkImageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col px-[32px] gap-y-2 md:mb-1">
            <div className="flex items-center gap-x-2">
              {cardsArray[3].logo}
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[14px] sm:text-[16px] font-bold`}
              >
                {cardsArray[3].title}
              </p>
            </div>
            <div>
              <p
                className={`text-[12px] 
               dark:text-[#FFFFFF5C] text-[#1212128F] text-opacity-[36%]
            }`}
              >
                {cardsArray[3].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden container my-16">
        <Swiper spaceBetween={45} slidesPerView={1.2}>
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
