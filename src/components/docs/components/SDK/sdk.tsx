import React from "react";
import { useTranslation } from "react-i18next";

export const SDKSection = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h2 className={`text-2xl font-semibold dark:text-white text-black`}>
        Overview
      </h2>
      <p className={`text-base font-normal mt-4  dark:text-white text-black`}>
        {t("sdkDoc")}
      </p>
    </div>
  );
};
