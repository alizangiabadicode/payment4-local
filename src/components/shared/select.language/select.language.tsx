"use client";

import React, { useEffect, useRef, useState } from "react";
import { supportedLanguages } from "./supported.language";
import { useTranslation } from "react-i18next";
import LanguageLightIcon from "../../../../public/images/svg/language-light-icon";
import {
  CheckIconLight,
  LanguageDarkIcon,
} from "../../../../public/images/svg";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "../../../../i18nConfig";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme: isDark } = useTheme();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleLanguageChange = (lang: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${lang};expires=${date.toUTCString()};path=/`;
    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + lang + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${lang}`));
    }

    router.refresh();
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={languageSelectorRef}
      style={{ direction: "ltr" }}
      className="relative inline-block text-left"
    >
      <div className="cursor-pointer" onClick={toggleMenu}>
        {isDark === "dark" ? <LanguageDarkIcon /> : <LanguageLightIcon />}
      </div>
      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
            isDark === "dark" ? "bg-[#000000] " : "bg-white"
          } ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {supportedLanguages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => handleLanguageChange(lang.value)}
                className={`px-4 py-2 text-sm text-gray-700 ${
                  isDark === "dark" ? "hover:bg-[#252525]" : "hover:bg-[#ccc]"
                } w-full text-left flex justify-between items-center`}
              >
                <div className="flex items-center gap-x-4">
                  <p
                    className={`${
                      isDark === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {lang.label}
                  </p>
                  {lang.icon}
                </div>
                {i18n.language === lang.value && <CheckIconLight />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
