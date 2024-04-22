import React from "react";
import { useTranslation } from "react-i18next";

export const DevelopersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-5">
      <p
        className={`text-base font-semibold leading-8 dark:text-[#FFFFFFC7] dark:text-opacity-[78%] text-[#121212C7] text-opacity-[78%]`}
      >
        {t("developerDesc")}
      </p>
    </div>
  );
};
