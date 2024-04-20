"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";


export const SystemLimits = () => {
  const { t } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();
  return (
    <div>
      <ul className="flex flex-col gap-y-6" style={{ listStyle: "outside" }}>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("systemLimitOne")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("systemLimitTwo")}
          </p>
        </li>
      </ul>
    </div>
  );
};
