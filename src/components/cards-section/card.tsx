"use client";

import React, { use } from "react";
import { Button } from "../shared/button";
import { RightArrowIcon } from "../../../public/images/svg";
import { t } from "i18next";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export interface CardsType {
  title: string;
  desc: string;
  buttonText: string;
  imageUrl: string;
  id?: number;
}

const Card = (props: CardsType) => {
  const { t } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  const cards: CardsType[] = [
    {
      id: 1,
      title: t("cardOne"),
      desc: t("cardOneDesc"),
      buttonText: t("signup"),
      imageUrl: "/../../../public/images/img-card-one.png",
    },
    {
      id: 2,
      title: t("cardTwo"),
      desc: t("cardTwoDesc"),
      buttonText: t("createPaymentPage"),
      imageUrl: "/../../../public/images/img-card-two.png",
    },
    {
      id: 3,
      title: t("cardThree"),
      desc: t("cardThreeDesc"),
      buttonText: t("createPaymentLink"),
      imageUrl: "/../../../public/images/img-card-three.png",
    },
    {
      id: 4,
      title: t("cardFour"),
      desc: t("cardFourDesc"),
      buttonText: t("joinUs"),
      imageUrl: "/../../../public/images/img-card-four.png",
    },
  ];

  return (
    <div
      className={`${
        isDark === "dark" ? "bg-mobile-dark-card" : "bg-light-gradient-card"
      } ${
        isDark === "dark" ? "sm:bg-dark-card" : "sm:bg-light-gradient-card"
      } grid grid-cols-1 sm:grid-cols-2 rounded-md max-w-[850px]`}
    >
      <div className="flex flex-col gap-y-5 sm:gap-y-11 sm:pt-12 pl-10">
        <p
          className={`font-bold sm:text-24 text-16 ${
            isDark === "dark" ? "text-white" : null
          }`}
        >
          {props.title}
        </p>
        <p
          className={`text-[12px] sm:text-16  sm:w-3/4 ${
            isDark === "dark" ? "text-white opacity-[49%]" : "text-primary-text"
          }`}
        >
          {props.desc}
        </p>
        <div className="mb-[10px]">
          <Button className="px-[10px] sm:px-10 sm:py-[10px] py-[7px] flex gap-x-2 bg">
            {props.buttonText}
            <RightArrowIcon />
          </Button>
        </div>
      </div>
      <div
        className={`${
          props.imageUrl ===
            "/static/img-card-three-5929c6ed25afb9f98674da109944ec75.png" &&
          "sm:mt-[76px]"
        } -order-last sm:order-1 w-[330px] sm:w-[384px]`}
      >
        <Image width={354} height={354} src={props.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Card;
