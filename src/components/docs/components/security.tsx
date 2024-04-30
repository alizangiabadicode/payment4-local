import React from "react";
import { useTranslation } from "react-i18next";

export const SecuritySection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-3">
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] 
        text-[#121212C7] 
    `}
      >
        {t("security")}
      </p>
    </div>
  );
};
