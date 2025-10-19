"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SignupIcon } from "@/icons/svg/signup";
import { Share } from "@/icons/svg/share";
import { EarnIcon } from "@/icons/svg/earn";
import { useIsMobile } from "@/hooks/useIsMobile";

interface MobileStepsCarouselProps {
  step1Title: string;
  step1Description: string;
  step2Title: string;
  step2Description: string;
  step3Title: string;
  step3Description: string;
}

const MobileStepsCarousel = ({
  step1Title,
  step1Description,
  step2Title,
  step2Description,
  step3Title,
  step3Description
}: MobileStepsCarouselProps) => {
  const isMobile = useIsMobile();
  if (!isMobile) return null;
  return (
    <div className="w-full overflow-hidden md:hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1.125}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#8B5CF6]',
        }}
        className="pb-12 h-auto"
        style={{ height: 'auto' }}
      >
        {/* Step 1: Sign Up */}
        <SwiperSlide>
          <div className="text-center px-2 md:px-4 dark:bg-dark-gradient-card md:bg-transparent py-8 md:py-0 h-full flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <SignupIcon />
              </div>
              <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
                {step1Title}
              </h3>
              <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {step1Description}
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Step 2: Share Your Code */}
        <SwiperSlide>
          <div className="text-center px-2 md:px-4 dark:bg-dark-gradient-card md:bg-transparent py-8 md:py-0 h-full flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <Share />
              </div>
              <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
                {step2Title}
              </h3>
              <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {step2Description}
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Step 3: Earn Commission */}
        <SwiperSlide>
          <div className="text-center px-2 md:px-4 dark:bg-dark-gradient-card md:bg-transparent py-8 md:py-0 h-full flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <EarnIcon />
              </div>
              <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
                {step3Title}
              </h3>
              <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {step3Description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MobileStepsCarousel;
