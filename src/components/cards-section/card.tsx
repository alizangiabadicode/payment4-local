import React from "react";
import { Button } from "../shared/button";
import { LeftArrowIcon, RightArrowIcon } from "../../icons/svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";


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
          className={`text-[12px] sm:text-16  sm:w-3/4 dark:text-white dark:text-opacity-[49%] text-primary-text`}
        >
          {props.desc}
        </p>
        <div className="mb-[10px]">
          <Button
            onClick={() => {
              window.open(
                `${process.env.NEXT_PUBLIC_SIGHNUP_URL}?lang=${i18n.language}`,
                "_blank"
              );
            }}
            className="cursor-pointer hidden md:flex px-[10px] 
            sm:px-10 sm:py-[10px] py-[7px] gap-x-2 mb-5 md:mb-0"
          >
            {props.buttonText}
            {i18n.dir() === "ltr" ? <RightArrowIcon /> : <LeftArrowIcon />}
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
