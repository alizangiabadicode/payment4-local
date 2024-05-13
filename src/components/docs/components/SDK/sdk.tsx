import React from "react";
import { useTranslation } from "react-i18next";

export const SDKSection = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h2 className={`text-[20px] font-semibold dark:text-white text-black`}>
        {t('overview')}
      </h2>
      <p
        className={`text-base font-normal mt-4   dark:text-[#FFFFFFC7] 
        text-[#121212C7] `}
      >
        {t("sdkDoc")}
      </p>
    </div>
  );
};
