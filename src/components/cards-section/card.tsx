import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import useQueryParams from "@/hooks/useQueryParams";

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
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source } = queryParams;
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
          dark:text-[#B5B5B5]  text-[#717171]`}
        >
          {props.desc}
        </p>
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
