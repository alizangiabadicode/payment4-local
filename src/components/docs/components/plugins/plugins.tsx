import { t } from "i18next";
import { useTheme } from "next-themes";
import React from "react";
import useDarkMode from "use-dark-mode";

export const PluginsSection = () => {
  const { resolvedTheme: isDark } = useTheme();

  return (
    <p
      className={`text-base mt-3 mb-2 ${
        isDark
          ? "text-[#FFFFFFC7] opacity-[78%]"
          : "text-[#121212C7] opacity-[78%]"
      }`}
    >
      {t("pluginDesc")}
    </p>
  );
};
