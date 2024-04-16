import { t } from "i18next";
import { useTheme } from "next-themes";
import React from "react";
import useDarkMode from "use-dark-mode";
export const SDKSection = () => {
  const { resolvedTheme: isDark } = useTheme();

  return (
    <div className="p-4">
      <h2
        className={`text-2xl font-semibold ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Overview
      </h2>
      <p
        className={`text-base font-normal mt-4 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {t("sdkDoc")}
      </p>
    </div>
  );
};
