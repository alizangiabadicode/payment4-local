"use client";

import React, { useState } from "react";
import {
  ClockIcon,
  EmailIcon,
  Instagram,
  Linkedin,
  LocationIcon,
  PhoneIcon,
  X,
  Youtube,
} from "../../../icons/svg";
import ContactForm from "../../../components/forms/contact.form";
import Image from "next/image";
import { Snackbar } from "@/components/shared";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/shared/button";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{ direction }}
      className="flex flex-col gap-y-[64px] md:gap-y-[88px] mb-[100px] md:mt-[50px]"
    >
      <Snackbar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={t("successTicket")}
      />
      <div className="flex justify-center">
        <p
          className={`
            dark:text-white
          text-[18px] md:text-[24px] font-bold`}
        >
          {t("contact us")}
        </p>
      </div>
      <div className="md:hidden flex flex-col gap-y-[24px] mx-[20px]">
        <div className="grid grid-cols-3 grid-rows-1 justify-items-center gap-[20px]">
          <div className="flex flex-col gap-y-[32px]">
            {i18n.language === "fa" && (
              <>
                <div className="flex flex-col items-center gap-y-[5px]">
                  <PhoneIcon />
                  <p
                    className={`
               dark:text-white
             text-[16px] font-bold`}
                  >
                    {t("phone")}
                  </p>
                  <p
                    className={`text-[12px] 
                  dark:text-white
                 `}
                  >
                    021-45628182
                  </p>
                  <p
                    className={`text-[12px] 
                  dark:text-white
                 `}
                  >
                    09912142499
                  </p>
                </div>
              </>
            )}
            <div className="flex flex-col items-center gap-y-[5px]">
              <EmailIcon />
              <p
                className={`
                dark:text-white
              text-[16px] font-bold`}
              >
                {t("email")}
              </p>
              <p
                className={`text-[12px] 
                dark:text-white
               `}
              >
                info@payment4.com
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-[32px] items-center">
            {i18n.language === "fa" && (
              <>
                <div
                  className={`border-l h-[74px] mx-4  dark:border-[#FFFFFF29] border-[#12121229]`}
                ></div>
              </>
            )}
            <div
              className={`border-l h-[74px] mx-4
              dark:border-[#FFFFFF29] border-[#12121229]`}
            ></div>
            {/* <div className="flex flex-col items-center  gap-y-[5px]">
              <LocationIcon />
              <p
                className={`
                dark:text-white
              text-[16px] font-bold`}
              >
                {t("address")}
              </p>
              <p className="text-[12px] text-center">
                تهران، بلوار پژوهش، پارک علم و فناوری دانشگاه تربیت مدرس، مرکز
                نوآوری زرین
              </p>
            </div> */}
          </div>
          <div className="flex flex-col md:flex-row gap-y-[32px]">
            <div className="flex flex-col items-center  gap-y-[5px]">
              <ClockIcon />
              <p
                className={`
                dark:text-white
              text-[16px] font-bold`}
              >
                {t("hour")}
              </p>
              <p
                className={`text-[12px] 
               dark:text-white text-center
              `}
              >
                {i18n.language !== "fa"
                  ? t("openTime")
                  : "شنبه تا چهارشنبه :‌۹ صبح تا ۱۶:۳۰ عصر"}
              </p>
            </div>
            {i18n.language === "fa" && (
              <>
                <div className="flex flex-col items-center gap-y-[5px]">
                  <LocationIcon />
                  <p
                    className={`
                dark:text-white
              text-[16px] font-bold`}
                  >
                    {t("address")}
                  </p>
                  <p className="text-[12px]">
                    تهران، بلوار پژوهش، پارک علم و فناوری دانشگاه تربیت مدرس،
                    مرکز نوآوری زرین
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex px-[245px] md:px-[50px] 
      lg:px-[200px] justify-between"
      >
        <div className="flex flex-col items-center  gap-y-[5px]">
          <EmailIcon />
          <p
            className={`
             dark:text-white
           text-[16px] font-bold`}
          >
            {t("email")}
          </p>
          <p
            className={`text-[14px] 
           dark:text-white
          `}
          >
            info@payment4.com
          </p>
        </div>
        <div
          className={`border-l h-[74px] mx-4
            dark:border-[#FFFFFF29] border-[#12121229]`}
        ></div>
        {i18n.language === "fa" && (
          <>
            <div className="flex flex-col items-center  gap-y-[5px]">
              <LocationIcon />
              <p
                className={`
            dark:text-white
          text-[16px] font-bold`}
              >
                {t("address")}
              </p>
              <p
                className={`text-[14px] 
           dark:text-white
          `}
              >
                تهران، بلوار پژوهش، پارک علم و فناوری دانشگاه تربیت مدرس، مرکز
                نوآوری زرین
              </p>
            </div>
            <div
              className={`border-l h-[74px] mx-4
           dark:border-[#FFFFFF29] border-[#12121229]`}
            ></div>
          </>
        )}
        {i18n.language === "fa" && (
          <>
            <div className="flex flex-col gap-y-[5px] items-center">
              <PhoneIcon />
              <p
                className={`
             dark:text-white
           text-[16px] font-bold`}
              >
                {t("phone")}
              </p>
              <p
                style={{ direction: "ltr" }}
                className={`text-[14px] 
             dark:text-white
            `}
              >
                021-45628182
              </p>
              <p
                style={{ direction: "ltr" }}
                className={`text-[14px] 
             dark:text-white
            `}
              >
                09912142499
              </p>
            </div>
            <div
              className={`border-l h-[74px] mx-4
           dark:border-[#FFFFFF29] border-[#12121229]`}
            ></div>
          </>
        )}
        <div className="flex flex-col items-center gap-y-[5px]">
          <ClockIcon />
          <p
            className={`
            dark:text-white
          text-[16px] font-bold`}
          >
            {t("hour")}
          </p>
          <p
            className={`text-[14px] 
              dark:text-white
             `}
          >
            {i18n.language !== "fa"
              ? t("openTime")
              : "شنبه تا چهارشنبه :‌۹ صبح تا ۱۶:۳۰ عصر"}
          </p>
        </div>
      </div>
      <div
        className={`
          dark:bg-dark-gradient-social-networks bg-light-gradient-social-networks
         h-[172px] gap-y-[15px] md:gap-y-0
           flex flex-col md:flex-row md:items-center md:justify-around`}
      >
        <div className="hidden md:flex flex-col">
          <p
            className={`
              dark:text-white
             md:text-[24px] font-semibold`}
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
            className={`
            dark:text-white
           md:text-[24px] font-semibold`}
          >
            {t("joinOurSocialNetworks")}
          </p>
        </div>
        <div
          className="flex gap-x-[20px] md:gap-x-[30px] lg:gap-x-[60px] 
        justify-center px-[15px]"
        >
          <Button
            className="rounded-[63px] w-[65px] h-[45px] md:w-[100px] md:h-[52px] flex justify-center items-center"
            onClick={() => {
              window.open(
                i18n.language === "fa"
                  ? "https://www.youtube.com/channel/UCDPGsr2TpzDDZwmjsAfPzGQ"
                  : "https://www.youtube.com/channel/UCppBDjYXa0_KwcGmS0xBNqA",
                "_blank"
              );
            }}
          >
            <Youtube />
          </Button>
          <Button
           className="rounded-[63px] w-[65px] h-[45px] md:w-[100px] md:h-[52px] flex justify-center items-center"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/payment4/",
                "_blank"
              );
            }}
          >
            <Linkedin />
          </Button>
          <Button
            className="rounded-[63px] w-[65px] h-[45px] md:w-[100px] md:h-[52px] flex justify-center items-center"
            onClick={() => {
              window.open(
                i18n.language === "fa"
                  ? "https://x.com/payment4_fa?s=11"
                  : "https://x.com/payment4_com",
                "_blank"
              );
            }}
          >
            <X />
          </Button>
          <Button
            className="rounded-[63px] w-[65px] h-[45px] md:w-[100px] md:h-[52px] flex justify-center items-center"
            onClick={() => {
              window.open(
                i18n.language === "fa"
                  ? "https://www.instagram.com/payment4_fa"
                  : "https://www.instagram.com/payment4_com"
              ),
                "_blank";
            }}
          >
            <Instagram />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center md:flex-row justify-center px-[30px]">
        <ContactForm setOpenSnackBar={setIsOpen} />
        <div className=" md:px-0">
          <Image
            className="hidden dark:block"
            width={487}
            height={487}
            src={"/images/dark-map-img.png"}
            alt="map"
          />
          <Image
            className="dark:hidden block"
            width={487}
            height={487}
            src={"/images/light-map-img.png"}
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
