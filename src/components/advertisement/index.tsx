"use client";

import React from "react";
import { Button } from "../shared/button";
import {
  IphoneDarkImg,
  IphoneImg,
  RightArrowIcon,
} from "../../../public/images/svg";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const AdvertisementCard = () => {
  const { t } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();

  return (
    <div
      className={`max-w-[300px] sm:max-w-none 
        dark:bg-dark-gradient-ad-card
           bg-light-gradient-ad-card
      sm:py-[75px] rounded my-14 flex flex-col sm:flex-row sm:justify-center gap-y-10 py-5`}
    >
      <div className="flex flex-col gap-10 ml-[25px]">
        <p
          className={`text-[18px] sm:text-[24px] font-bold 
            dark:text-white text-black
          }`}
        >
          {t("adTitle")}
        </p>
        <div className="w-3/4 sm:w-1/2">
          <p
            className={`text-[12px] sm:text-[14px] text-primary-text 
              dark:text-white opacity-[36%] text-black
            }`}
          >
            {t("adDesc")}
          </p>
        </div>
        <div className="flex justify-start">
          <Button className="px-[10px] sm:px-10 sm:py-[10px] py-[7px] flex gap-x-2 bg">
            {t("getStartedNow")}
            <RightArrowIcon />
          </Button>
        </div>
      </div>
      <div className="-order-last sm:order-last flex justify-center sm:justify-evenly">
        <Image
          className="dark:hidden block"
          width={314}
          height={392}
          src="/images/ad-img-light.png"
          alt="ad-img"
        />
        <Image
          className="dark:block hidden"
          width={314}
          height={292}
          src="/images/ad-img-dark.png"
          alt="add-img"
        />
      </div>
    </div>
  );
};

export default AdvertisementCard;
