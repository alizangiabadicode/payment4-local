"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";

export const PluginsSection = () => {
  const { resolvedTheme: isDark } = useTheme();
  const { t } = useTranslation();
  return (
    <p
      className={`text-base mt-3 mb-2 ${
        isDark === "dark"
          ? "text-[#FFFFFFC7] opacity-[78%]"
          : "text-[#121212C7] opacity-[78%]"
      }`}
    >
      {t("pluginDesc")}
    </p>
  );
};
