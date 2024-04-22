import React from "react";
import { Button } from "../shared/button";
import { RightArrowIcon } from "../../../public/images/svg";
import Image from "next/image";


export interface CardsType {
  title: string;
  desc: string;
  buttonText: string;
  lightImageUrl: string;
  darkImageUrl: string;
  id?: number;
}

const Card = (props: CardsType) => {
  return (
    <div
      className={`
         dark:bg-dark-gradient-card bg-light-gradient-card
          grid grid-cols-1 sm:grid-cols-2 rounded-md max-w-[850px] px-[20px]`}
    >
      <div className="flex flex-col gap-y-5 sm:gap-y-11 sm:pt-12 pl-10">
        <p className={`font-bold sm:text-[24px] text-[16px] dark:text-white`}>
          {props.title}
        </p>
        <p
          className={`text-[12px] sm:text-16  sm:w-3/4 dark:text-white dark:text-opacity-[49%] text-primary-text`}
        >
          {props.desc}
        </p>
        <div className="mb-[10px]">
          <Button className="px-[10px] sm:px-10 sm:py-[10px] py-[7px] flex gap-x-2 mb-5 md:mb-0 dark:bg-[#FFFFFF1C]">
            {props.buttonText}
            <RightArrowIcon />
          </Button>
        </div>
      </div>
      <div className="-order-last sm:order-1 w-[330px] sm:w-[384px]">
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
