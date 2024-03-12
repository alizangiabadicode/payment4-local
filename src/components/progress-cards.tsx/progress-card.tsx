import React from "react";
import image from "../../images/signup-image.png";
import { CardsArrayProps } from "./cards-array";
import {
  GatewaySetupIcon,
  SecurityMeasureIcon,
  SettlementRequestIcon,
  SignupIcon,
} from "../../images/svg";
import ApiPaylinkCreationIcon from "../../images/svg/api-paylink-creation-icon";

const ProgressCard: React.FC<CardsArrayProps> = (props) => {
  return (
    <div className="w-mobile-card sm:w-[1000px] grid grid-cols-1 sm:grid-cols-2 gap-y-6">
      <div className="sm:order-1">
        <img src={props.imageUrl} alt="" />
      </div>
      {props.title === "Sign Up" ? (
        <div className="flex flex-col gap-y-2">
          <div className="sm:bg-[#F6F6F6] sm:w-[450px] sm:px-[33px] sm:py-[24px]">
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p className="text-[18px] sm:text-[22px] font-bold">
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p className="text-[12px] sm:text-[14px] leading-5">
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] px-[33px]">
            <div className="flex items-center gap-x-3">
              <GatewaySetupIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Gateway Setup
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <ApiPaylinkCreationIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                API or Paylink Creation
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Settlement Requests
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Security Measures
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "Gateway Setup" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
            <SignupIcon />
            <p className="text-[22px] text-[#12121296] font-bold">Sign Up</p>
          </div>
          <div className="sm:bg-[#F6F6F6] sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]">
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p className="text-[18px] font-bold">{props.title}</p>
            </div>
            <div className="sm:mt-1">
              <p className="text-[12px] sm:text-[14px] leading-5">
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <ApiPaylinkCreationIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                API or Paylink Creation
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Settlement Requests
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Security Measures
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "API or Paylink Creation" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon />
              <p className="text-[22px] text-[#12121296] font-bold">Sign Up</p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Gateway Setup
              </p>
            </div>
          </div>
          <div className="sm:bg-[#F6F6F6] sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]">
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p className="text-[18px] font-bold">{props.title}</p>
            </div>
            <div className="sm:mt-1">
              <p className="text-[12px] sm:text-[14px] leading-5">
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Settlement Requests
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Security Measures
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "Settlement Requests" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon />
              <p className="text-[22px] text-[#12121296] font-bold">Sign Up</p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Gateway Setup
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <ApiPaylinkCreationIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                API or Paylink Creation
              </p>
            </div>
          </div>
          <div className="sm:bg-[#F6F6F6] sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]">
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p className="text-[18px] font-bold">{props.title}</p>
            </div>
            <div className="sm:mt-1">
              <p className="text-[12px] sm:text-[14px] leading-5">
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Security Measures
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "Security Measures" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon />
              <p className="text-[22px] text-[#12121296] font-bold">Sign Up</p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Gateway Setup
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <ApiPaylinkCreationIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                API or Paylink Creation
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SecurityMeasureIcon />
              <p className="text-[22px] text-[#12121296] font-bold">
                Settlement Requests
              </p>
            </div>
          </div>
          <div className="sm:bg-[#F6F6F6] sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]">
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p className="text-[18px] font-bold">{props.title}</p>
            </div>
            <div className="sm:mt-1">
              <p className="text-[12px] sm:text-[14px] leading-5">
                {props.desc}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProgressCard;
