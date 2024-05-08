import React from "react";
import { useTranslation } from "react-i18next";

export const WHMCSSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-5 mt-3">
      <p
        className={`text-base font-semibold leading-8 dark:text-[#FFFFFFC7] dark: text-[#121212C7] `}
      >
        {t("whmcsPluginDesc")}
        <a
          href={process.env.NEXT_PUBLIC_APP_WHMCS_PLUGIN_URL}
          className="text-blue-600"
        >
          {t("hereIsTheDlLink")}
        </a>
      </p>
    </div>
  );
};
