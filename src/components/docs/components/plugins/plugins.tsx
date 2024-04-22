import React from "react";
import { useTranslation } from "react-i18next";

export const PluginsSection = () => {
  const { t } = useTranslation();
  return (
    <p
      className={`text-base font-normal mt-3 mb-2 dark:text-[#FFFFFFC7] 
    dark:text-opacity-[78%] text-[#121212C7] text-opacity-[78%]`}
    >
      {t("pluginDesc")}
    </p>
  );
};
