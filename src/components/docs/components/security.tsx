import React from "react";
import { useTranslation } from "react-i18next";

export const SecuritySection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
        text-[#121212C7] text-opacity-[78%] mt-2
    `}
      >
        {t("security")}
      </p>
    </div>
  );
};
