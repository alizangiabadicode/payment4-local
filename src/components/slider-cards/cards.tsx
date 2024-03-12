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
const SliderCards = () => {
  const { value: isDark } = useDarkMode();
  const cardsArray: CardsArrayInterface[] = [
    {
      imageUrl: isDark ? globalSellingDark : globalSelling,
      title: "Global Selling",
      desc: "Expand worldwide, ensuring success in diverse markets without spatial restrictions.",
      logo: <ShoppingIcon color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark ? instantSettlementDark : instantSettlement,
      title: "Instant Settlement",
      desc: "Fast checkout, available around the clock for seamless global transactions.",
      logo: <CreditCardImg color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark ? twentyFourHourSupportDark : twentyFourHourSupport,
      title: "24-hour support",
      desc: "24-hour availability for uninterrupted guidance and seamless transaction experience.",
      logo: <SupportIcon color={isDark ? "#FFFFFF" : undefined} />,
    },
    {
      imageUrl: isDark ? cryptoDiversityDark : cryptoDiversity,
      title: "Crypto Diversity",
      desc: "Support for various cryptocurrencies, unlocking endless business possibilities",
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
