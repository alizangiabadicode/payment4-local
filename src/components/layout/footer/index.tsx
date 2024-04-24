"use client";
import React, { useEffect, useState } from "react";
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
import Image from "next/image";
const Footer = () => {
  const [mounted, setMounted] = useState(false);

  const { t, i18n } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  useEffect(() => setMounted(true), []);
  return (
    <footer
      style={{ direction: direction }}
      className={`border-t border-[#E5E5E5] dark:border-[#171717]  grid grid-cols-1 sm:grid-cols-2 p-4 sm:py-6 gap-y-8
        dark:bg-[#0B0B0E]  bg-white`}
    >
      <div className="flex flex-col items-center sm:items-start md:pl-32">
        <div className="flex flex-col gap-y-4 sm:gap-y-4">
          <div>
            <Logo />
          </div>
          <div className="sm:max-w-64 flex">
            <p
              className={`text-sm text-[#1212125C] leading-6 
              dark:text-[#FFFFFFA1] dark:text-opacity-[36%]`}
            >
              {t("footerDesc")}
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            <div className="cursor-pointer">
              {isDark === "dark" && mounted ? (
                <XDarkLogo />
              ) : isDark === "light" && mounted ? (
                <XLogo />
              ) : (
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                  width={36}
                  height={36}
                  sizes="36x36"
                  alt="Loading Light/Dark Toggle"
                  priority={false}
                  title="Loading Light/Dark Toggle"
                />
              )}
            </div>
            <div className="cursor-pointer">
              {isDark === "dark" && mounted ? (
                <TelegramDarkIcon />
              ) : isDark === "light" && mounted ? (
                <TelegramIcon />
              ) : (
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                  width={36}
                  height={36}
                  sizes="36x36"
                  alt="Loading Light/Dark Toggle"
                  priority={false}
                  title="Loading Light/Dark Toggle"
                />
              )}
            </div>
            <div className="cursor-pointer">
              {isDark === "dark" && mounted ? (
                <YoutubeDarkIcon />
              ) : isDark === "light" && mounted ? (
                <YoutubeIcon />
              ) : (
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                  width={36}
                  height={36}
                  sizes="36x36"
                  alt="Loading Light/Dark Toggle"
                  priority={false}
                  title="Loading Light/Dark Toggle"
                />
              )}
            </div>
            <div className="cursor-pointer">
              {isDark === "dark" && mounted ? (
                <LinkedinDarkIcon />
              ) : isDark === "light" && mounted ? (
                <LinkedinIcon />
              ) : (
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                  width={36}
                  height={36}
                  sizes="36x36"
                  alt="Loading Light/Dark Toggle"
                  priority={false}
                  title="Loading Light/Dark Toggle"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-y-7 sm:gap-0">
        <div className="flex flex-col gap-3">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className="dark:text-[#FFFFFFA1]"
          >
            {t("menu")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("home")}
            </Link>
            <Link
              href="/developers"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("developers")}
            </Link>
            <Link
              href="/documents"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("documents")}
            </Link>
            <Link
              href="/about-us"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact-us"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("contact us")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className="dark:text-[#FFFFFFA1]"
          >
            {t("followUs")}
          </p>
          <div className="flex flex-col gap-2">
            <p
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("linkedin")}
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              Telegram
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("twitter")}
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("instagram")}
            </p>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-4 items-center">
          <div className="cursor-pointer">
            {isDark === "dark" && mounted ? (
              <XDarkLogo />
            ) : isDark === "light" && mounted ? (
              <XLogo />
            ) : (
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
              />
            )}
          </div>
          <div className="cursor-pointer">
            {isDark === "dark" && mounted ? (
              <TelegramDarkIcon />
            ) : isDark === "light" && mounted ? (
              <TelegramIcon />
            ) : (
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
              />
            )}
          </div>
          <div className="cursor-pointer">
            {isDark === "dark" && mounted ? (
              <YoutubeDarkIcon />
            ) : isDark === "light" && mounted ? (
              <YoutubeIcon />
            ) : (
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
              />
            )}
          </div>
          <div className="cursor-pointer">
            {isDark === "dark" && mounted ? (
              <LinkedinDarkIcon />
            ) : isDark === "light" && mounted ? (
              <LinkedinIcon />
            ) : (
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className="dark:text-[#FFFFFFA1]"
          >
            {t("resources")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/terms-of-service"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("termsOfService")}
            </Link>
            <Link
              href="/privacy-policy"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/faq"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("faq")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className="dark:text-[#FFFFFFA1]"
          >
            {t("company")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/about-us"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact-us"
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("contact us")}
            </Link>
            {/* <Link
              href="/blog"
              style={{ fontSize: "12px" }}
              className={`${
                isDark === "dark" ? "text-white opacity-[63%]" : null
              } text-primary-text`}
            >
              {t("blog")}
            </Link> */}
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p
            style={{ fontSize: "14px", fontWeight: 700 }}
            className="dark:text-[#FFFFFFA1]"
          >
            Product
          </p>
          <div className="flex flex-col gap-2">
            <p
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
            >
              {t("logIn")}
            </p>
            <p
              style={{ fontSize: "12px" }}
              className={`text-sm text-primary-text leading-6 
              dark:text-[#FFFFFFA1] text-opacity-[36%]`}
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
