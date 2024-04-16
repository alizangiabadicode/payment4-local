import { t } from "i18next";
import { useTheme } from "next-themes";
import React from "react";
import useDarkMode from "use-dark-mode";

export const WHMCSSection = () => {
  const { resolvedTheme: isDark } = useTheme();

  return (
    <div className="px-4 py-5">
      <p
        className={`text-base font-semibold leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("whmcsPluginDesc")}
        <a
          href={process.env.REACT_APP_WHMCS_PLUGIN_URL}
          className="text-blue-600"
        >
          {t("hereIsTheDlLink")}
        </a>
      </p>
    </div>
  );
};
