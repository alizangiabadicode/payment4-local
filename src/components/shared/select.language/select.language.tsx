"use client";

import React, { useEffect, useRef, useState } from "react";
import { supportedLanguages } from "./supported.language";
import { useTranslation } from "react-i18next";
import LanguageLightIcon from "../../../icons/svg/language-light-icon";
import {
  CheckIconDark,
  CheckIconLight,
  LanguageDarkIcon,
} from "../../../icons/svg";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "../../../../i18nConfig";
import Image from "next/image";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={30}
        height={30}
        sizes="30x30"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  return (
    <div
      ref={languageSelectorRef}
      style={{ direction: "ltr" }}
      className="relative inline-block text-left lg:ltr:ml-4 lg:rtl:mr-4 ltr:ml-4 rtl:mr-4 
      md:ltr:ml-2 md:rtl:mr-2"
    >
      <div className="cursor-pointer" onClick={toggleMenu}>
        {isDark === "dark" ? <LanguageDarkIcon /> : <LanguageLightIcon />}
      </div>
      {isOpen && (
        <div
          style={{ zIndex: 1 }}
          className={`ltr:origin-top-right rtl:origin-top-left absolute ltr:right-0 rtl:left-0 mt-2 w-48 rounded-md shadow-lg
             dark:bg-[#040406]  bg-white
          ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            style={{ direction: i18n.dir() }}
          >
            {supportedLanguages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => handleLanguageChange(lang.value)}
                className={`px-4 py-2 text-sm text-gray-700 
                  dark:hover:bg-[#111115] hover:bg-[#F6F6F6]
                  ${
                    i18n.language === lang.value
                      ? "dark:bg-[#222228] bg-[#DFDFDF]"
                      : null
                  }
                 w-full text-left flex justify-between items-center`}
              >
                <div className="flex items-center gap-x-4 rtl:flex-row-reverse">
                  <p
                    className={`
                      dark:text-white text-black
                    `}
                  >
                    {lang.label}
                  </p>
                  {lang.icon}
                </div>
                {i18n.language === lang.value && isDark === "light" ? (
                  <CheckIconLight />
                ) : i18n.language === lang.value && isDark === "dark" ? (
                  <CheckIconDark />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
