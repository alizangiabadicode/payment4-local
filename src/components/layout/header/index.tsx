"use client";
import React from "react";
import { Button } from "../../shared/button";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../shared/select.language/select.language";
import ThemeSwitch from "@/components/shared/theme.swicher/theme.swicher";
import { NavigationBar } from "./navigation";
import i18next from "i18next";

const Header = () => {
  const { t } = useTranslation();
  const direction =
    i18next.dir() === "rtl" || i18next.language === "ar" ? "rtl" : "ltr";
  return (
    <header
      style={{ direction: direction }}
      className="dark:bg-[#0B0B0E] bg-white"
    >
      <div
        className={`container px-5 sm:px-50 flex items-center justify-between my-4 `}
      >
        <NavigationBar />
        <div className="flex gap-x-4">
          <div className="flex gap-x-2">
            <div className="cursor-pointer">
              <ThemeSwitch />
            </div>
            <LanguageSelector />
          </div>
          <div>
            <Button
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
              className="px-1 sm:px-6 text-sm sm:text-base"
            >
              {t("signup")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
