import React from "react";
import { useTranslation } from "react-i18next";

export const WHMCSSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-5">
      <p
        className={`text-base font-semibold leading-8 dark:text-[#FFFFFFC7] dark:text-opacity-[78%] text-[#121212C7] text-opacity-[78%]`}
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
