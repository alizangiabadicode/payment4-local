"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";

export const ApiKeySection = () => {
  const { resolvedTheme: isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <div>
      <p
        className={`text-base leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("apiKey")}
      </p>
    </div>
  );
};
