import Image from "next/image";
import React from "react";
import { Button } from "@/components/shared/button";
import { CardProps } from "./types";
import { useTranslation } from "react-i18next";
import { LeftArrowIcon, RightArrowIcon } from "@/icons/svg";

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  lightImageSrc,
  darkImageSrc,
  reverse,
}) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const handleSignupClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${i18n.language}`;
    window.open(redirectUrl, "_blank");
  };
  return (
    <div
      className={`dark:bg-dark-gradient-card bg-light-gradient-card gap-y-[44px]
        rounded-lg p-6 flex justify-around 
        items-center ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } flex-col-reverse`}
    >
      <div>
        <p className="lg:text-[22px] text-[16px] font-semibold mb-2 text-[#121212] dark:text-white">
          {title}
        </p>
        <p className="text-[#121212C7] dark:text-[#FFFFFFC7] text-[12px] lg:text-[16px] dark:text-gray-300 mb-4 max-w-[445px]">
          {description}
        </p>
        <Button
          onClick={handleSignupClick}
          className="py-2 px-4 rounded-md lg:flex items-center gap-x-2 hidden "
        >
          {buttonText}
          <div className="ml-2">
            {isRtl ? <LeftArrowIcon /> : <RightArrowIcon />}
          </div>
        </Button>
      </div>
      <div className="flex-shrink-0 ml-6">
        <Image
          src={darkImageSrc}
          alt={title}
          width={228}
          height={198}
          className="object-contain hidden dark:block"
        />
        <Image
          src={lightImageSrc}
          alt={title}
          width={228}
          height={198}
          className="object-contain dark:hidden block"
        />
      </div>
    </div>
  );
};

export default Card;
