import React from "react";
import Logo from "../../../../public/images/svg/logo";
import {
  LinkedinDarkIcon,
  LinkedinIcon,
  TelegramDarkIcon,
  TelegramIcon,
  XDarkLogo,
  XLogo,
  YoutubeDarkIcon,
  YoutubeIcon,
} from "../../../../public/images/svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <footer
      style={{ borderTopColor: "#E5E5E5", direction: direction }}
      className={`border-t grid grid-cols-1 sm:grid-cols-2 p-4 sm:py-6 gap-y-8 ${
        isDark ? "bg-[#0B0B0E]" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center sm:items-start md:pl-32">
        <div className="flex flex-col gap-y-4 sm:gap-y-4">
          <div>
            <Logo />
          </div>
          <div className="sm:max-w-64 flex">
            <p
              className={`text-sm text-primary-text leading-6 ${
                isDark ? "text-white opacity-[36%]" : null
              }`}
            >
              {t("footerDesc")}
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            <div className="cursor-pointer">
              {isDark ? <XDarkLogo /> : <XLogo />}
            </div>
            <div className="cursor-pointer">
              {isDark ? <TelegramDarkIcon /> : <TelegramIcon />}
            </div>
            <div className="cursor-pointer">
              {isDark ? <YoutubeDarkIcon /> : <YoutubeIcon />}
            </div>
            <div className="cursor-pointer">
              {isDark ? <LinkedinDarkIcon /> : <LinkedinIcon />}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-y-7 sm:gap-0">
        <div className="flex flex-col gap-3">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className={`${isDark ? "text-white" : null}`}
          >
            {t("menu")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("home")}
            </Link>
            <Link
              href="/developers"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("developers")}
            </Link>
            <Link
              href="/documents"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("documents")}
            </Link>
            <Link
              href="/about"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact-us"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("contact us")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className={`${isDark ? "text-white" : null}`}
          >
            {t("followUs")}
          </p>
          <div className="flex flex-col gap-2">
            <p
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("linkedin")}
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              Telegram
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("twitter")}
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("instagram")}
            </p>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-4 items-center">
          <div className="cursor-pointer">
            <XLogo />
          </div>
          <div className="cursor-pointer">
            <TelegramIcon />
          </div>
          <div className="cursor-pointer">
            <YoutubeIcon />
          </div>
          <div className="cursor-pointer">
            <LinkedinIcon />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className={`${isDark ? "text-white" : null}`}
          >
            {t("resources")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/terms-of-service"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("termsOfService")}
            </Link>
            <Link
              href="/privacy-policy"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/faq"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("faq")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className={`${isDark ? "text-white" : null}`}
          >
            {t("company")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/about"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact-us"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("contact us")}
            </Link>
            <Link
              href="/blog"
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("blog")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className={`${isDark ? "text-white" : null}`}
          >
            Product
          </p>
          <div className="flex flex-col gap-2">
            <p
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("logIn")}
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`${
                isDark ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("signup")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
