"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";


export const TransactionSection = () => {
  const { resolvedTheme: isDark } = useTheme();
  const { t } = useTranslation();
  return (
    <div>
      <ul className="flex flex-col gap-8" style={{ listStyle: "outside" }}>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("transactionTxtOne")}
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
            {t("transactionTxtTwo")}
          </p>
        </li>
      </ul>
    </div>
  );
};
