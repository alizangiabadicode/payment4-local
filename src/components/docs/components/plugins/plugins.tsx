import React from "react";
import { useTranslation } from "react-i18next";

export const PluginsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-3">
      <p
        className={`text-base font-normal mt-3 mb-2 dark:text-[#FFFFFFC7] 
 text-[#121212C7]`}
      >
        {t("pluginDesc")}
      </p>
    </div>
  );
};
