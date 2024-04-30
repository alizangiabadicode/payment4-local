import React from "react";
import { useTranslation } from "react-i18next";

export const DevelopersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-5 mt-3">
      <p
        className={`text-base font-semibold leading-8 dark:text-[#FFFFFFC7] 
        text-[#121212C7]`}
      >
        {t("developerDesc")}
      </p>
    </div>
  );
};
