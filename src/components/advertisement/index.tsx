"use client";
import React from "react";
import { Button } from "../shared/button";
import { LeftArrowIcon, RightArrowIcon } from "../../icons/svg";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const AdvertisementCard = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`max-w-[639px]  sm:max-w-none w-full
        dark:bg-dark-gradient-ad-card sm:px-[15px] md:px-0
           bg-light-gradient-ad-card
      md:pt-[45px] md:pb-[25px] rounded my-14 flex flex-col items-center 
      sm:flex-row sm:justify-around gap-y-10 py-5`}
    >
      <div className="flex flex-column justify-center sm:ml-[25px] sm:w-1/2 lg:w-fit">
        <div className="flex flex-col justify-center items-center md:items-baseline 
        gap-5">
          <p
            className={`text-[18px] sm:text-[24px] font-bold 
            dark:text-white text-black
          }`}
          >
            {t("adTitle")}
          </p>
          <div className="max-w-[306px] sm:max-w-none sm:w-[350px]">
            <p
              className={`text-[12px] sm:text-[14px] text-[#717171] 
              dark:text-[#B5B5B5]  
            }`}
            >
              {t("adDesc")}
            </p>
          </div>
          <div className="flex justify-start w-full">
            <Button className="px-[10px] sm:px-10 sm:py-[10px] py-[7px] flex gap-x-2 bg">
              <Link
                target="_blank"
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${i18n.language}`}
              >
                {t("letsGetStarted")}
              </Link>
              {i18n.dir() === "ltr" ? <RightArrowIcon /> : <LeftArrowIcon />}
            </Button>
          </div>
        </div>
      </div>
      <div
        className="-order-last sm:order-last flex justify-center 
      sm:justify-evenly xl:justify-start w-[200px] lg:w-[400px]"
      >
        <Image
          className="dark:hidden block"
          width={239}
          height={320}
          src="/images/ad-img-light.png"
          alt="ad-img"
        />
        <Image
          className="dark:block hidden"
          width={239}
          height={320}
          src="/images/ad-img-dark.png"
          alt="add-img"
        />
      </div>
    </div>
  );
};

export default AdvertisementCard;
