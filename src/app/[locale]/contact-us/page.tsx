"use client";

import React from "react";
import {
  ClockIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from "../../../../public/images/svg";
import ContactForm from "../../../components/forms/contact-form";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { resolvedTheme: isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div
      style={{ direction }}
      className="flex flex-col gap-y-[64px] md:gap-y-[88px] mb-[100px]"
    >
      <div className="flex justify-center">
        <p
          className={`${
            isDark === "dark" ? "text-white" : null
          } text-[18px] md:text-[24px] font-bold`}
        >
          {t("contact us")}
        </p>
      </div>
      <div className="md:hidden flex flex-col gap-y-[24px] mx-[20px]">
        <div className="grid grid-cols-3 justify-items-center">
          <div className="flex flex-col gap-y-[32px]">
            <div className="flex flex-col  items-center">
              <PhoneIcon />
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[16px] font-bold`}
              >
                {t("phone")}
              </p>
              <p
                className={`text-[12px] ${
                  isDark === "dark" ? "text-white" : null
                } `}
              >
                +989121212121
              </p>
            </div>
            <div className="flex flex-col items-center">
              <EmailIcon />
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[16px] font-bold`}
              >
                {t("email")}
              </p>
              <p
                className={`text-[12px] ${
                  isDark === "dark" ? "text-white" : null
                } `}
              >
                Payment4@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-[32px]">
            <div
              className={`border-l h-[74px] mx-4 ${
                isDark === "dark" ? "border-white opacity-[16%]" : null
              }`}
            ></div>
            <div
              className={`border-l h-[74px] mx-4 ${
                isDark === "dark" ? "border-white opacity-[16%]" : null
              }`}
            ></div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-[32px]">
            <div className="flex flex-col items-center">
              <ClockIcon />
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[16px] font-bold`}
              >
                Hour
              </p>
              <p
                className={`text-[12px] ${
                  isDark === "dark" ? "text-white" : null
                } `}
              >
                {t("openTime")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <LocationIcon />
              <p
                className={`${
                  isDark === "dark" ? "text-white" : null
                } text-[16px] font-bold`}
              >
                {t("address")}
              </p>
              <p className="text-[12px]">UAE , Sari</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex px-[245px] justify-between">
        <div className="flex flex-col items-center">
          <EmailIcon />
          <p
            className={`${
              isDark === "dark" ? "text-white" : null
            } text-[16px] font-bold`}
          >
            {t("email")}
          </p>
          <p
            className={`text-[14px] ${
              isDark === "dark" ? "text-white" : null
            } `}
          >
            Payment4@gmail.com
          </p>
        </div>
        <div
          className={`border-l h-[74px] mx-4 ${
            isDark ? "border-white opacity-[16%]" : null
          }`}
        ></div>
        <div className="flex flex-col items-center">
          <LocationIcon />
          <p
            className={`${
              isDark === "dark" ? "text-white" : null
            } text-[16px] font-bold`}
          >
            {t("address")}
          </p>
          <p
            className={`text-[14px] ${
              isDark === "dark" ? "text-white" : null
            } `}
          >
            UAE , Sari
          </p>
        </div>
        <div
          className={`border-l h-[74px] mx-4 ${
            isDark === "dark" ? "border-white opacity-[16%]" : null
          }`}
        ></div>
        <div className="flex flex-col  items-center">
          <PhoneIcon />
          <p
            className={`${
              isDark === "dark" ? "text-white" : null
            } text-[16px] font-bold`}
          >
            {t("phone")}
          </p>
          <p
            className={`text-[14px] ${
              isDark === "dark" ? "text-white" : null
            } `}
          >
            +989121212121
          </p>
        </div>
        <div
          className={`border-l h-[74px] mx-4 ${
            isDark === "dark" ? "border-white opacity-[16%]" : null
          }`}
        ></div>
        <div className="flex flex-col items-center">
          <ClockIcon />
          <p
            className={`${
              isDark === "dark" ? "text-white" : null
            } text-[16px] font-bold`}
          >
            {t("hour")}
          </p>
          <p
            className={`text-[14px] ${
              isDark === "dark" ? "text-white" : null
            } `}
          >
            {t("openTime")}
          </p>
        </div>
      </div>
      <div
        className={`${
          isDark === "dark" ? "bg-contacts-dark" : "bg-contacts-light"
        } h-[172px] gap-y-[15px] md:gap-y-[0px]  flex flex-col md:flex-row md:items-center md:justify-around`}
      >
        <div className="hidden md:flex flex-col">
          <p
            className={`${
              isDark === "dark" ? "text-white" : null
            } md:text-[24px] font-semibold`}
          >
            {t("joinOurSocialNetworks")}
          </p>
          {/* <p
            className={`${
              isDark ? "text-white" : null
            } md:text-[24px] font-semibold`}
          >
            social networks
          </p> */}
        </div>
        <div className="flex md:hidden flex-col items-center justify-center mt-[50px]">
          <p
            className={`${
              isDark === "dark" ? "text-white" : null
            } md:text-[24px] font-semibold`}
          >
            {t("joinOurSocialNetworks")}
          </p>
        </div>
        <div className="flex gap-x-[60px] justify-center px-[15px]">
          <div>
            <Image
              width={80}
              height={40}
              src="/images/youtube-contact.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={80}
              height={40}
              src="/images/linkedin-contact.png"
              alt=""
            />
          </div>
          <div>
            <Image width={80} height={40} src="/images/x-contact.png" alt="" />
          </div>
          <div>
            <Image
              width={80}
              height={40}
              src="/images/telegram-contact.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center md:flex-row justify-center ">
        <div>
          <ContactForm />
        </div>
        <div className="px-[30px] md:px-0">
          <Image
            width={487}
            height={487}
            src={
              isDark === "dark"
                ? "/images/dark-map-img.png"
                : "/images/light-map-img.png"
            }
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
