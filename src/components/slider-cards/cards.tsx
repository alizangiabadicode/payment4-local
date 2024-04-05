import React from "react";
import {
  CreditCardImg,
  DollarIcon,
  ShoppingIcon,
  SupportIcon,
} from "../../images/svg";
import globalSelling from "../../images/global-selling-img.png";
import globalSellingDark from "../../images/global-selling-dark-img.png";
import instantSettlement from "../../images/instant-settlement-img.png";
import instantSettlementDark from "../../images/instant-settlement-dark-img.png";
import twentyFourHourSupport from "../../images/twenty-four-hour-support.png";
import twentyFourHourSupportDark from "../../images/twenty-four-hour-support-dark.png";
import cryptoDiversity from "../../images/crypto-diversity.png";
import cryptoDiversityDark from "../../images/crypto-diversity-dark.png";
import SliderCard from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardsArrayInterface } from "./cards-array";
import useDarkMode from "use-dark-mode";
import { useTranslation } from "react-i18next";
const SliderCards = () => {
  const { value: isDark } = useDarkMode();
  const { t } = useTranslation();
  const cardsArray: CardsArrayInterface[] = [
    {
      imageUrl: isDark ? globalSellingDark : globalSelling,
      title: t("sliderOne"),
      desc: t("sliderOneDesc"),
      logo: <ShoppingIcon color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark ? instantSettlementDark : instantSettlement,
      title: t("sliderTwo"),
      desc: t("sliderTwoDesc"),
      logo: <CreditCardImg color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark ? twentyFourHourSupportDark : twentyFourHourSupport,
      title: t("sliderThree"),
      desc: t("sliderThreeDesc"),
      logo: <SupportIcon color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark ? cryptoDiversityDark : cryptoDiversity,
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
