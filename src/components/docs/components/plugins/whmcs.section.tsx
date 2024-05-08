import { Button } from "@/components/shared/button";
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
        <Button className="py-[7px] px-[20px] mx-5">
          <a
            href={process.env.NEXT_PUBLIC_APP_WHMCS_PLUGIN_URL}
          >
            {t("hereIsTheDlLink")}
          </a>
        </Button>
      </p>
    </div>
  );
};
