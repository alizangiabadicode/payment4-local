import React from "react";
import { cardsArray } from "./cards-array";
import SliderCard from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const SliderCards = () => {
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
