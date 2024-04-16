"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { supportedLanguages } from "./supported.language";
import { useTranslation } from "react-i18next";
import LanguageLightIcon from "../../../../public/images/svg/language-light-icon";

import {
  CheckIconLight,
  LanguageDarkIcon,
} from "../../../../public/images/svg";
import { useTheme } from "next-themes";
import i18next from "i18next";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme: isDark } = useTheme();

  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang);
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
        {isDark ? <LanguageDarkIcon /> : <LanguageLightIcon />}
      </div>
      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
            isDark ? "bg-[#000000] " : "bg-white"
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
                  isDark ? "hover:bg-[#252525]" : "hover:bg-[#ccc]"
                } w-full text-left flex justify-between items-center`}
              >
                <div className="flex items-center gap-x-4">
                  <p className={`${isDark ? "text-white" : "text-black"}`}>
                    {lang.label}
                  </p>
                  {lang.icon}
                </div>
                {i18next.language === lang.value && <CheckIconLight />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
