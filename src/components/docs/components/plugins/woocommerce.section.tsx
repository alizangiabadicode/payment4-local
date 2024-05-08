import { Button } from "@/components/shared/button";
import React from "react";
import { useTranslation } from "react-i18next";

export const WoocommerceSection = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-5">
      <p
        className={`text-base font-semibold dark:text-[#FFFFFFC7] 
     text-[#121212C7] `}
      >
        {t("installation")}
      </p>
      <p className={`text-base font-semibold mt-3 `}>{t("step")} 1</p>
      <p
        className={`text-base font-normal leading-8 mt-2 dark:text-[#FFFFFFC7] 
       text-[#121212C7] `}
      >
        {t("dlPlugin")}
        {/* <a href={process.env.NEXT_PUBLIC_APP_WOOCOMMERCE_PLUGIN_URL}>
          {t("downloadLink")}
        </a> */}
        . {t("headOfWordPress")}
        <Button className="py-[7px] px-[20px] mx-5">
          <a href={process.env.NEXT_PUBLIC_APP_WOOCOMMERCE_PLUGIN_URL}>
            {t("downloadLink")}
          </a>
        </Button>
      </p>
      <p className="text-base font-semibold mt-5">{t("step")} 2</p>
      <p
        className={`text-base font-normal leading-8 mt-2 dark:text-[#FFFFFFC7] 
        text-[#121212C7] `}
      >
        {t("configurePlugin")}
      </p>
      <p className={`text-base font-semibold mt-2`}>{t("step")} 3</p>
      <p
        className={`text-base font-normal leading-8 mt-2 dark:text-[#FFFFFFC7] 
          text-[#121212C7] `}
      >
        {t("fillInPluginSettings")}
      </p>
      <ul
        className="text-base font-normal leading-8 ml-6 my-5"
        style={{ listStyle: "outside" }}
      >
        <li
          className={`dark:text-[#FFFFFFC7] 
          text-[#121212C7]`}
        >
          {t("enableDisable")}
        </li>
        <li
          className={`dark:text-[#FFFFFFC7] 
          text-[#121212C7]`}
        >
          {t("pluginSandbox")}
        </li>
        <li
          className={`dark:text-[#FFFFFFC7] 
          text-[#121212C7]`}
        >
          {t("apiKeyPlugin")}
        </li>
        <li
          className={`dark:text-[#FFFFFFC7] 
          text-[#121212C7]`}
        >
          {t("successPaymentMessage")}
        </li>
        <li
          className={`dark:text-[#FFFFFFC7] 
          text-[#121212C7]`}
        >
          {t("failedPaymentMessage")}
        </li>
        <li
          className={`dark:text-[#FFFFFFC7] 
          text-[#121212C7]`}
        >
          {t("acceptablePaymentMessage")}
        </li>
        <li
          className={`dark:text-[#FFFFFFC7] 
          text-[#121212C7]`}
        >
          {t("mismatchPaymentMessage")}
        </li>
      </ul>
      <p className={`text-base font-semibold mt-3`}>{t("step")} 4</p>
      <p
        className={`text-base font-normal mt-3 dark:text-[#FFFFFFC7] 
        text-[#121212C7] leading-loose`}
      >
        {t("optimizeWooCommerceCheckoutPage")}
      </p>
      <p className={`text-base font-semibold mt-3`}>{t("step")} 5</p>
      <p
        className={`text-base font-normal mt-3 dark:text-[#FFFFFFC7] 
        text-[#121212C7] leading-loose`}
      >
        {t("seamlesslyUse")}
      </p>
      {/* <p
        className={`text-base font-normal mt-4 dark:text-[#FFFFFFC7] 
        text-[#121212C7] leading-loose`}
      >
        {t("dlPluginDesc")}
        <a href={process.env.NEXT_PUBLIC_APP_WOOCOMMERCE_PLUGIN_URL}>
          {t("downloadLink")}
        </a>
        . {t("pluginBenefits")}
      </p> */}
    </div>
  );
};
