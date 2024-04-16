import React from "react";
import { CardsArrayInterface } from "./cards-array";
import useDarkMode from "use-dark-mode";
import { useTheme } from "next-themes";
import Image from "next/image";

const SliderCard = (props: CardsArrayInterface) => {
  const { resolvedTheme: isDark } = useTheme();
  return (
    <div
      className={`${
        isDark ? "bg-[#17171a]" : null
      } w-[275px] bg-[#12121208] rounded-[8px] min-h-[384px] flex flex-col items-center`}
    >
      <div className="pt-[35px] w-[195px] h-[250px]">
        <Image width={100} height={100} src={props.imageUrl} alt="" />
      </div>
      <div className="flex flex-col pl-[32px] gap-y-5 pb-[27px]">
        <div className="flex items-center gap-x-2">
          {props.logo}
          <p
            className={`${
              isDark ? "text-white" : null
            } text-[14px] sm:text-[16px] font-bold`}
          >
            {props.title}
          </p>
        </div>
        <div>
          <p
            className={`text-[12px] ${
              isDark ? "text-white opacity-[36%]" : null
            }`}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
