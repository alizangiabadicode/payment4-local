"use client";
import React from "react";
import { Button } from "../shared/button";
import { LeftArrowIcon, RightArrowIcon } from "../../../public/images/svg";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const AdvertisementCard = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`max-w-[639px] sm:max-w-none 
        dark:bg-dark-gradient-ad-card
           bg-light-gradient-ad-card
      md:pt-[45px] md:pb-[25px] rounded my-14 flex flex-col items-center sm:flex-row sm:justify-between  gap-y-10 py-5`}
    >
      <div className="flex flex-col justify-center gap-5 ml-[25px] sm:w-1/2">
        <p
          className={`text-[18px] sm:text-[24px] font-bold 
            dark:text-white text-black
          }`}
        >
          {t("adTitle")}
        </p>
        <div className="w-3/4 sm:w-[350px]">
          <p
            className={`text-[12px] sm:text-[14px] text-primary-text 
              dark:text-white dark:text-opacity-[36%] text-black
            }`}
          >
            {t("adDesc")}
          </p>
        </div>
        <div className="flex justify-start">
          <Button className="px-[10px] sm:px-10 sm:py-[10px] py-[7px] flex gap-x-2 bg">
            <Link
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_SIGHNUP_URL}?lang=${i18n.language}`}
            >
              {t("letsGetStarted")}
            </Link>
            {i18n.dir() === "ltr" ? <RightArrowIcon /> : <LeftArrowIcon />}
          </Button>
        </div>
      </div>
      <div className="-order-last sm:order-last flex justify-center sm:justify-evenly w-[200px] md:w-[400px]">
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
