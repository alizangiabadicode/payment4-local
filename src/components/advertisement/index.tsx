import React from "react";
import { Button } from "../shared/button";
import { IphoneImg, RightArrowIcon } from "../../images/svg";

const AdvertisementCard = () => {
  return (
    <div className="max-w-[400px] sm:max-w-none bg-mobile-advertisement-card sm:bg-advertisement-card bg-no-repeat sm:py-[75px] rounded my-14 flex flex-col sm:flex-row sm:justify-center gap-y-10">
      <div className="flex flex-col gap-10 ml-[25px] sm:ml-[197px]">
        <p className="text-[18px] sm:text-[24px] font-bold">
          Unlock the Future with Payment4
        </p>
        <div className="w-3/4 sm:w-1/2">
          <p className="text-[12px] sm:text-[14px] text-primary-text">
            Ready to experience seamless cryptocurrency transactions? Join
            Payment4 today and revolutionize your online payments.
          </p>
        </div>
        <div className="flex justify-start">
          <Button className="px-[10px] sm:px-10 sm:py-[10px] py-[7px] flex gap-x-2 bg">
            Get Started Now
            <RightArrowIcon />
          </Button>
        </div>
      </div>
      <div className="-order-last sm:order-last flex justify-center sm:justify-evenly ">
        <IphoneImg />
      </div>
    </div>
  );
};

export default AdvertisementCard;
