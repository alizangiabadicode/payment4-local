import { Button } from "@/components/shared/button";
import { DownloadIcon } from "@/icons/svg";
import React from "react";
import { useTranslation } from "react-i18next";

export const WHMCSSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-5 mt-3">
      <p
        className={`text-base font-normal leading-8 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("whmcsPluginDesc")}
        <Button
          className="dark:text-[#9E6DFF] text-[#9E6DFF] 
        mx-5 dark:bg-transparent bg-transparent font-semibold"
        >
          <a
            className="flex ltr:flex-row-reverse gap-x-2"
            href={process.env.NEXT_PUBLIC_APP_WHMCS_PLUGIN_URL}
          >
            {t("hereIsTheDlLink")} <DownloadIcon />
          </a>
        </Button>
      </p>
    </div>
  );
};
