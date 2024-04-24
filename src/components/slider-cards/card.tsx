import React from "react";
import { CardsArrayInterface } from "./cards-array-interface";
import { useTheme } from "next-themes";
import Image from "next/image";

const SliderCard = (props: CardsArrayInterface) => {
  const { resolvedTheme: isDark } = useTheme();
  return (
    <div
      className={`
         dark:bg-[#17171a] 
       w-[275px] bg-[#12121208] rounded-[8px] min-h-[384px] flex flex-col justify-around items-center`}
    >
      <div className="w-[175px]  flex">
        <Image
          className="dark:hidden block"
          width={185}
          height={131}
          src={props.lightImageUrl}
          alt=""
        />
        <Image
          className="hidden dark:block"
          width={195}
          height={111}
          src={props.darkImageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col pl-[32px] gap-y-2 mt-[27px]">
        <div className="flex items-center gap-x-2">
          {props.logo}
          <p
            className={`${
              isDark === "dark" ? "text-white" : null
            } text-[14px] sm:text-[16px] font-bold`}
          >
            {props.title}
          </p>
        </div>
        <div>
          <p
            className={`text-[12px] 
               dark:text-[#FFFFFF5C] text-[#1212128F] text-opacity-[36%]
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
