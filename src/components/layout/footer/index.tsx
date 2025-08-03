"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../icons/svg/logo";
import {
  LinkedinDarkIcon,
  LinkedinIcon,
  XDarkLogo,
  XLogo,
  YoutubeDarkIcon,
  YoutubeIcon,
} from "../../../icons/svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import useQueryParams from "@/hooks/useQueryParams";
const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source, campaign_mode } = queryParams;
  const { t, i18n } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  const direction = i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  useEffect(() => setMounted(true), []);
  return (
    <footer
      style={{ direction: direction }}
      className={`border-t border-[#E5E5E5] dark:border-[#171717]  grid grid-cols-1  
      sm:grid-cols-3 lg:grid-cols-2 p-4 sm:py-6 gap-y-8 sm:gap-x-[30px] lg:gap-x-0
        dark:bg-[#0B0B0E]  bg-white`}
    >
      <div
        className="flex flex-col items-center sm:items-start 
      lg:items-start lg:pl-[100px]"
      >
        <div className="flex flex-col gap-y-4 sm:gap-y-4">
          <div>
            <Logo />
          </div>
          <div className="sm:max-w-64 flex">
            <p
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] dark:`}
            >
              {t("footerDesc")}
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            <div
              onClick={() => {
                window.open(
                  i18n.language === "fa"
                    ? "https://x.com/payment4_fa?s=11"
                    : "https://x.com/payment4_com",
                  "_blank"
                );
              }}
              className="cursor-pointer"
            >
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
            <div
              onClick={() => {
                window.open(
                  i18n.language === "fa"
                    ? "https://www.youtube.com/channel/UCDPGsr2TpzDDZwmjsAfPzGQ"
                    : "https://www.youtube.com/channel/UCppBDjYXa0_KwcGmS0xBNqA",
                  "_blank"
                );
              }}
              className="cursor-pointer"
            >
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
            <div
              onClick={() => {
                window.open("https://www.linkedin.com/company/payment4/", "_blank");
              }}
              className="cursor-pointer"
            >
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
      <div
        className="grid grid-cols-3 md:gap-x-[30px] md:grid-cols-5 gap-y-7 sm:gap-y-[15px] 
      sm:col-span-2 lg:col-span-1"
      >
        <div className="flex flex-col gap-3">
          <p style={{ fontSize: "14px", fontWeight: 700 }} className="">
            {t("menu")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href={{
                pathname: "/",
                query: {
                  ...(utm_campaign && { utm_campaign }),
                  ...(utm_medium && { utm_medium }),
                  ...(utm_source && { utm_source }),
                },
              }}
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("home")}
            </Link>
            <Link
              href="/faq"
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("faq")}
            </Link>
            <Link
              href="/documents"
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("documents")}
            </Link>
            <Link
              href={{
                pathname: "/about-us",
                query: {
                  ...(utm_campaign && { utm_campaign }),
                  ...(utm_medium && { utm_medium }),
                  ...(utm_source && { utm_source }),
                },
              }}
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact-us"
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("contact us")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p style={{ fontSize: "14px", fontWeight: 700 }} className="">
            {t("followUs")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/payment4/"}
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("linkedin")}
            </Link>
            <Link
              target="_blank"
              href={
                i18n.language === "fa"
                  ? " https://x.com/payment4_fa?s=11"
                  : "https://x.com/payment4_com"
              }
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("twitter")}
            </Link>
            <Link
              target="_blank"
              href={
                i18n.language === "fa"
                  ? "https://www.instagram.com/payment4_fa"
                  : "https://www.instagram.com/payment4_com"
              }
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("instagram")}
            </Link>
            <Link
              target="_blank"
              href={
                i18n.language === "fa"
                  ? "https://www.youtube.com/channel/UCDPGsr2TpzDDZwmjsAfPzGQ"
                  : "https://www.youtube.com/channel/UCppBDjYXa0_KwcGmS0xBNqA"
              }
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("youTube")}
            </Link>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-4 items-center">
          <div
            onClick={() => {
              window.open(
                i18n.language === "fa"
                  ? "https://x.com/payment4_fa?s=11"
                  : "http://x.com/payment4_com",
                "_blank"
              );
            }}
            className="cursor-pointer"
          >
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
          <div
            onClick={() => {
              window.open(
                i18n.language === "fa"
                  ? "https://www.youtube.com/channel/UCDPGsr2TpzDDZwmjsAfPzGQ"
                  : "https://www.youtube.com/channel/UCppBDjYXa0_KwcGmS0xBNqA",
                "_blank"
              );
            }}
            className="cursor-pointer"
          >
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
          <div
            onClick={() => {
              window.open("https://www.linkedin.com/company/payment4/", "_blank");
            }}
            className="cursor-pointer"
          >
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
          <p style={{ fontSize: "14px", fontWeight: 700 }} className="">
            {t("resources")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/terms-of-service"
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("termsOfService")}
            </Link>
            <Link
              href="/privacy-policy"
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("privacyPolicyFooter")}
            </Link>
            <Link
              target="_blank"
              href="https://service.payment4.com/doc"
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("developers")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p style={{ fontSize: "14px", fontWeight: 700 }} className="">
            {t("company")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href={{
                pathname: "/about-us",
                query: {
                  ...(utm_campaign && { utm_campaign }),
                  ...(utm_medium && { utm_medium }),
                  ...(utm_source && { utm_source }),
                },
              }}
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact-us"
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("contact us")}
            </Link>
            <Link
              target="_blank"
              href={`https://${i18n.language === "fa" ? "fa." : ""}${
                process.env.NEXT_PUBLIC_BLOG_URL
              }`}
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("blog")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p style={{ fontSize: "14px", fontWeight: 700 }} className="">
            {t("product")}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signin?lang=${i18n.language}${
                utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
              }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
                utm_source ? `&utm_source=${utm_source}` : ""
              }${campaign_mode ? `&campaign_mode=${campaign_mode}` : ""}`}
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("logIn")}
            </Link>
            <Link
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${i18n.language}${
                utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
              }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
                utm_source ? `&utm_source=${utm_source}` : ""
              }${campaign_mode ? `&campaign_mode=${campaign_mode}` : ""}`}
              style={{ fontSize: "12px" }}
              className={`text-sm text-[#5F5E5E] leading-6 
              dark:text-[#FFFFFFA1] `}
            >
              {t("signup")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
