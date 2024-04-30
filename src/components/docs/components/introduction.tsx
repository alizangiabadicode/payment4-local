import React from "react";
import { useTranslation } from "react-i18next";

export const Introduction = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p
        className={`text-[16px] leading-8 dark:text-[#FFFFFFC7] text-[#121212C7] mt-3`}
      >
        {t("docIntro")}
      </p>
    </div>
  );
};
