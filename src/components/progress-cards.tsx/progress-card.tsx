import React from "react";
import { CardsArrayProps } from "./progress-cards";
import {
  GatewaySetupIcon,
  SecurityMeasureIcon,
  SettlementRequestIcon,
  SignupIcon,
} from "../../images/svg";
import ApiPaylinkCreationIcon from "../../images/svg/api-paylink-creation-icon";
import useDarkMode from "use-dark-mode";
import { useTranslation } from "react-i18next";

const ProgressCard: React.FC<CardsArrayProps> = (props) => {
  const { value: isDark } = useDarkMode();
  const { t } = useTranslation();
  return (
    <div className="w-mobile-card sm:w-[1000px] grid grid-cols-1 sm:grid-cols-2 gap-y-6">
      <div className="sm:order-1">
        <img src={props.imageUrl} alt="" />
      </div>
      {props.title === "Sign Up" ? (
        <div className="flex flex-col gap-y-2">
          <div
            className={`${
              isDark ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            } sm:w-[450px] sm:px-[33px] sm:py-[24px]`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] px-[33px]">
            <div className="flex items-center gap-x-3">
              <GatewaySetupIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("gatewaySetup")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <ApiPaylinkCreationIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("progressThree")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("securityMeasures")}
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "Gateway Setup" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
            <SignupIcon color={isDark ? "#636365" : undefined} />
            <p
              className={`text-[22px] text-[#12121296] font-bold ${
                isDark ? "text-white opacity-[36%]" : null
              }`}
            >
              {t("signup")}
            </p>
          </div>
          <div
            className={`${
              isDark ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            } sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]`}
          >
            <div
              className={`text-[18px] sm:text-[22px] font-bold ${
                isDark ? "text-white opacity-[63%]" : null
              } flex items-center gap-x-3`}
            >
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <ApiPaylinkCreationIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("progressThree")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("securityMeasures")}
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "API or Paylink Creation" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("signup")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("gatewaySetup")}
              </p>
            </div>
          </div>
          <div
            className={`${
              isDark ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            } sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px]`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <SettlementRequestIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("securityMeasures")}
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "Settlement Requests" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                Sign Up
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                Gateway Setup
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <ApiPaylinkCreationIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                API or Paylink Creation
              </p>
            </div>
          </div>
          <div
            className={`sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px] ${
              isDark ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            }`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark ? "text-white" : null
                } text-[12px] sm:text-[14px] leading-5`}
              >
                {props.desc}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-10 mt-[46px] sm:mt-0 px-[33px]">
            <div className="flex items-center gap-x-3">
              <SecurityMeasureIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                Security Measures
              </p>
            </div>
          </div>
        </div>
      ) : props.title === "Security Measures" ? (
        <div className="flex flex-col gap-y-2">
          <div className="hidden sm:flex flex-col gap-y-[40px]">
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SignupIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("signup")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <GatewaySetupIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("gatewaySetup")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <ApiPaylinkCreationIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("progressThree")}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-x-3 px-[33px]">
              <SecurityMeasureIcon color={isDark ? "#636365" : undefined} />
              <p
                className={`text-[22px] text-[#12121296] font-bold ${
                  isDark ? "text-white opacity-[36%]" : null
                }`}
              >
                {t("settlementRequests")}
              </p>
            </div>
          </div>
          <div
            className={`sm:w-[450px] sm:px-[33px] sm:py-[24px] sm:my-[30px] ${
              isDark ? "sm:bg-[#151518]" : "sm:bg-[#F6F6F6]"
            }`}
          >
            <div className="flex items-center gap-x-3">
              {props.icon}
              <p
                className={`text-[18px] sm:text-[22px] font-bold ${
                  isDark ? "text-white opacity-[63%]" : null
                }`}
              >
                {props.title}
              </p>
            </div>
            <div className="sm:mt-1">
              <p
                className={`${
                  isDark ? "text-white" : null
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
