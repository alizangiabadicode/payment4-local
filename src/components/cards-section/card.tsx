import React from "react";
import { Button } from "../shared/button";
import { RightArrowIcon } from "../../images/svg";
import { CardsType } from "./cards-array";
import useDarkMode from "use-dark-mode";

const Card = (props: CardsType) => {
  const { value: isDark } = useDarkMode();
  return (
    <div
      className={`${isDark ? "bg-mobile-dark-card" : "bg-mobile-light-card"} ${
        isDark ? "sm:bg-dark-card" : "sm:bg-light-card"
      } grid grid-cols-1 sm:grid-cols-2 w-mobile-card h-mobile-card sm:w-card sm:h-card bg-no-repeat`}
    >
      <div className="flex flex-col gap-y-5 sm:gap-y-11 sm:pt-12 pl-10">
        <p
          className={`font-bold sm:text-24 text-16 ${
            isDark ? "text-white" : null
          }`}
        >
          {props.title}
        </p>
        <p
          className={`text-[12px] sm:text-16 text-primary-text sm:w-3/4 ${
            isDark ? "text-white opacity-[49%]" : null
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
        <img src={props.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Card;
