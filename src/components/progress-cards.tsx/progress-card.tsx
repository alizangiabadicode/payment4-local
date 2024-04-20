"use client";
import React from "react";
import { CardsArrayProps } from "./progress-cards";
import {
  GatewaySetupIcon,
  SecurityMeasureIcon,
  SettlementRequestIcon,
  SignupIcon,
} from "../../../public/images/svg";
import ApiPaylinkCreationIcon from "../../../public/images/svg/api-paylink-creation-icon";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";

const ProgressCard: React.FC<CardsArrayProps> = (props) => {
  const { resolvedTheme: isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div
      style={{ direction }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-y-6"
    >
      <div className="sm:order-1">
        <Image width={522} height={668} src={props.imageUrl} alt="" />
      </div>
      {props.title === t("signup") ? (
        <div className="flex flex-col gap-y-2">
          <div
            className={`${
              isDark === "dark" ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            } sm:w-[450px] sm:px-[33px] sm:py-[24px]`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark === "dark" ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] px-[33px]">
            <div className="flex items-center gap-x-3">
              <GatewaySetupIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("gatewaySetup")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <ApiPaylinkCreationIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("progressThree")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("securityMeasures")}
              </p>
            </div>
          </div>
        </div>
      ) : props.title === t("gatewaySetup") ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
            <SignupIcon color={isDark === "dark" ? "#636365" : undefined} />
            <p
              className={`text-[22px] text-[#12121296] font-bold ${
                isDark === "dark" ? "text-white opacity-[36%]" : null
              }`}
            >
              {t("signup")}
            </p>
          </div>
          <div
            className={`${
              isDark === "dark" ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            } sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]`}
          >
            <div
              className={`text-[18px] sm:text-[22px] font-bold ${
                isDark === "dark" ? "text-white opacity-[63%]" : null
              } flex items-center gap-x-3`}
            >
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark === "dark" ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <ApiPaylinkCreationIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("progressThree")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("securityMeasures")}
              </p>
            </div>
          </div>
        </div>
      ) : props.title === t("progressThree") ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon color={isDark === "dark" ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("signup")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("gatewaySetup")}
              </p>
            </div>
          </div>
          <div
            className={`${
              isDark === "dark" ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            } sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark === "dark" ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("securityMeasures")}
              </p>
            </div>
          </div>
        </div>
      ) : props.title === t("settlementRequests") ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                Sign Up
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                Gateway Setup
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <ApiPaylinkCreationIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                API or Paylink Creation
              </p>
            </div>
          </div>
          <div
            className={`sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px] ${
              isDark === "dark" ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            }`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark === "dark" ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                Security Measures
              </p>
            </div>
          </div>
        </div>
      ) : props.title === t("securityMeasures") ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon color={isDark === "dark" ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("signup")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("gatewaySetup")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <ApiPaylinkCreationIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("progressThree")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SecurityMeasureIcon
                color={isDark === "dark" ? "#636365" : undefined}
              />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark === "dark" ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
          </div>
          <div
            className={`sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px] ${
              isDark === "dark" ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            }`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark === "dark" ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
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
