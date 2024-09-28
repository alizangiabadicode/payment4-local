import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import useQueryParams from "@/hooks/useQueryParams";
import { Button } from "../shared/button";
import { LeftArrowIcon, RightArrowIcon } from "@/icons/svg";

export interface CardsType {
  title: string;
  desc: string;
  buttonText: string;
  lightImageUrl: string;
  darkImageUrl: string;
  id?: number;
}

const Card = (props: CardsType) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source } = queryParams;

  const handleSignupClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${
      i18n.language
    }${utm_campaign ? `&utm_campaign=${utm_campaign}` : ""}${
      utm_medium ? `&utm_campaign=${utm_medium}` : ""
    }${utm_source ? `&utm_campaign=${utm_source}` : ""}`;
    window.open(redirectUrl, "_blank");
  };
  return (
    <div
      className={`
         dark:bg-dark-gradient-card bg-light-gradient-card
          grid grid-cols-1 md:grid-cols-2 rounded-md max-w-[400px] md:max-w-[850px] x:min-w-[850px] px-[20px]`}
    >
      <div className="flex flex-col  gap-y-5 sm:gap-y-17 md:pt-12 md:rtl:pr-[30px] pl-10 mt-[30px]">
        <p className={`font-bold md:text-[24px] text-[20px] dark:text-white`}>
          {props.title}
        </p>
        <p
          className={`text-[12px] sm:text-[14px]  sm:w-3/4 
          dark:text-[#B5B5B5]  text-[#717171] mb-[30px] md:mb-[10px]`}
        >
          {props.desc}
        </p>
        <div className="hidden md:block mb-[10px]">
          <Button
            onClick={handleSignupClick}
            className="px-[15px] h-[43px] !text-[16px] flex items-center justify-center"
          >
            {props.buttonText}
            <div className="ml-2">
              {isRtl ? <LeftArrowIcon /> : <RightArrowIcon />}
            </div>
          </Button>
        </div>
      </div>
      <div className="-order-last md:order-1 sm:w-[384px] md:rtl:pr-[30px]">
        <Image
          className="dark:hidden block"
          width={354}
          height={354}
          src={props.lightImageUrl}
          alt=""
        />
        <Image
          className="hidden dark:block"
          width={354}
          height={354}
          src={props.darkImageUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
