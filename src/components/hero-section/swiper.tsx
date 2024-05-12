import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export const SwiperSection = () => {
  return (
    <>
      <div className="container hidden sm:block mt-[50px] mb-[130px]">
        <Swiper
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={4}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1.5 },
          }}
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
      <div className="sm:hidden mt-5 mb-10 w-[500px]">
        <Swiper
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
        >
          <SwiperSlide>
            <Image
              className="dark:block hidden"
              width={1000}
              height={100}
              src="/images/assets-dark.png"
              alt=""
            />
            <Image
              className="block dark:hidden"
              width={1000}
              height={100}
              src="/images/assets.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="dark:block hidden"
              width={1000}
              height={100}
              src="/images/assets-dark.png"
              alt=""
            />
            <Image
              className="block dark:hidden"
              width={1000}
              height={100}
              src="/images/assets.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
