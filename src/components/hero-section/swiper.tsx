import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export const SwiperSection = () => {
  return (
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
          <Image
            height={120}
            width={1000}
            src="/images/assets-dark.png"
            alt=""
            className="dark:block hidden"
          />

          <Image
            className="block dark:hidden"
            height={120}
            width={1000}
            src="/images/assets.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={120}
            width={1000}
            src="/images/assets-dark.png"
            alt=""
            className="dark:block hidden"
          />

          <Image
            className="block dark:hidden"
            height={120}
            width={1000}
            src="/images/assets.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={120}
            width={1000}
            src="/images/assets-dark.png"
            alt=""
            className="dark:block hidden"
          />

          <Image
            className="block dark:hidden"
            height={120}
            width={1000}
            src="/images/assets.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={120}
            width={1000}
            src="/images/assets-dark.png"
            alt=""
            className="dark:block hidden"
          />

          <Image
            className="block dark:hidden"
            height={120}
            width={1000}
            src="/images/assets.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
