"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export const Settlements = () => {
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
        {t("settlements")}
      </p>
    </div>
  );
};

