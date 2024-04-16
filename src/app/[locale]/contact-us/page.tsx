import React from "react";
import {
  ClockIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from "../../../../public/images/svg";
import youtube from "../../images/youtube-contact.png";
import linkedin from "../../images/linkedin-contact.png";
import x from "../../images/x-contact.png";
import telegram from "../../images/telegram-contact.png";
import ContactForm from "../../../components/forms/contact-form";
import lightMap from "../../images/light-map-img.png";
import darkMap from "../../images/dark-map-img.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import TranslationsProvider from "@/configs/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];
const ContactUs = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { resolvedTheme: isDark } = useTheme();
  const { t, resources, i18n } = await initTranslations(locale, i18nNamespaces);
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div
        style={{ direction }}
        className="flex flex-col gap-y-[64px] md:gap-y-[88px] mb-[100px]"
      >
        <div className="flex justify-center">
          <p
            className={`${
              isDark ? "text-white" : null
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
                    isDark ? "text-white" : null
                  } text-[16px] font-bold`}
                >
                  {t("phone")}
                </p>
                <p className={`text-[12px] ${isDark ? "text-white" : null} `}>
                  +989121212121
                </p>
              </div>
              <div className="flex flex-col items-center">
                <EmailIcon />
                <p
                  className={`${
                    isDark ? "text-white" : null
                  } text-[16px] font-bold`}
                >
                  {t("email")}
                </p>
                <p className={`text-[12px] ${isDark ? "text-white" : null} `}>
                  Payment4@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-[32px]">
              <div
                className={`border-l h-[74px] mx-4 ${
                  isDark ? "border-white opacity-[16%]" : null
                }`}
              ></div>
              <div
                className={`border-l h-[74px] mx-4 ${
                  isDark ? "border-white opacity-[16%]" : null
                }`}
              ></div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-[32px]">
              <div className="flex flex-col items-center">
                <ClockIcon />
                <p
                  className={`${
                    isDark ? "text-white" : null
                  } text-[16px] font-bold`}
                >
                  Hour
                </p>
                <p className={`text-[12px] ${isDark ? "text-white" : null} `}>
                  {t("openTime")}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <LocationIcon />
                <p
                  className={`${
                    isDark ? "text-white" : null
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
                isDark ? "text-white" : null
              } text-[16px] font-bold`}
            >
              {t("email")}
            </p>
            <p className={`text-[14px] ${isDark ? "text-white" : null} `}>
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
                isDark ? "text-white" : null
              } text-[16px] font-bold`}
            >
              {t("address")}
            </p>
            <p className={`text-[14px] ${isDark ? "text-white" : null} `}>
              UAE , Sari
            </p>
          </div>
          <div
            className={`border-l h-[74px] mx-4 ${
              isDark ? "border-white opacity-[16%]" : null
            }`}
          ></div>
          <div className="flex flex-col  items-center">
            <PhoneIcon />
            <p
              className={`${
                isDark ? "text-white" : null
              } text-[16px] font-bold`}
            >
              {t("phone")}
            </p>
            <p className={`text-[14px] ${isDark ? "text-white" : null} `}>
              +989121212121
            </p>
          </div>
          <div
            className={`border-l h-[74px] mx-4 ${
              isDark ? "border-white opacity-[16%]" : null
            }`}
          ></div>
          <div className="flex flex-col items-center">
            <ClockIcon />
            <p
              className={`${
                isDark ? "text-white" : null
              } text-[16px] font-bold`}
            >
              {t("hour")}
            </p>
            <p className={`text-[14px] ${isDark ? "text-white" : null} `}>
              {t("openTime")}
            </p>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-contacts-dark" : "bg-contacts-light"
          } h-[172px] gap-y-[15px] md:gap-y-[0px]  flex flex-col md:flex-row md:items-center md:justify-around`}
        >
          <div className="hidden md:flex flex-col">
            <p
              className={`${
                isDark ? "text-white" : null
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
                isDark ? "text-white" : null
              } md:text-[24px] font-semibold`}
            >
              {t("joinOurSocialNetworks")}
            </p>
          </div>
          <div className="flex gap-x-[60px] justify-center px-[15px]">
            <div>
              <Image src={youtube} alt="" />
            </div>
            <div>
              <Image src={linkedin} alt="" />
            </div>
            <div>
              <Image src={x} alt="" />
            </div>
            <div>
              <Image src={telegram} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center md:flex-row justify-center md:px-[192px]">
          <div>
            <ContactForm />
          </div>
          <div className="px-[15px]">
            <Image src={isDark ? darkMap : lightMap} alt="map" />
          </div>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ContactUs;
