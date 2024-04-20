import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useTheme } from "next-themes";
import Image from "next/image";

export const SwiperSection = () => {
  const { resolvedTheme: isDark } = useTheme();
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
          {isDark === "dark" ? (
            <Image
              height={120}
              width={1000}
              src="/images/assets-dark.png"
              alt=""
            />
          ) : (
            <Image height={120} width={1000} src="/images/assets.jpg" alt="" />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {isDark === "dark" ? (
            <Image
              height={120}
              width={1000}
              src="/images/assets-dark.png"
              alt=""
            />
          ) : (
            <Image height={120} width={1000} src="/images/assets.jpg" alt="" />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {isDark === "dark" ? (
            <Image
              height={120}
              width={1000}
              src="/images/assets-dark.png"
              alt=""
            />
          ) : (
            <Image height={120} width={1000} src="/images/assets.jpg" alt="" />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {isDark === "dark" ? (
            <Image
              height={120}
              width={1000}
              src="/images/assets-dark.png"
              alt=""
            />
          ) : (
            <Image height={120} width={1000} src="/images/assets.jpg" alt="" />
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
