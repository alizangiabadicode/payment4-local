import { DownloadIcon } from "@/icons/svg";
import React from "react";
import { useTranslation } from "react-i18next";

export const OpenCartSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-5 mt-3">
      <p
        className={`text-base font-normal leading-8 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("openCartPluginDesc")}
      </p>
      <div className="flex items-center mt-5">
        <a
          className="flex ltr:flex-row-reverse gap-x-2 font-semibold dark:text-[#9E6DFF] 
            text-[#9E6DFF]"
          href={`${process.env.NEXT_PUBLIC_APP_STORAGE_URL}/open_cart/payment4_open_cart.zip`}
        >
          {t("downloadLink")} <DownloadIcon />
        </a>
      </div>
    </div>
  );
};
