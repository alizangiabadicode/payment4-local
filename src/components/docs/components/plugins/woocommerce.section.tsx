"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";

export const WoocommerceSection = () => {
  const { resolvedTheme: isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="px-4 py-5">
      <p
        className={`text-base font-semibold  ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("installation")}
      </p>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("step")} 1
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("dlPlugin")}
        <a href={process.env.REACT_APP_WOOCOMMERCE_PLUGIN_URL}>
          {t("downloadLink")}
        </a>
        . {t("headOfWordPress")}
      </p>
      <p className="text-base font-semibold mt-5">{t("step")} 2</p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("configurePlugin")}
      </p>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("step")} 3
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("fillInPluginSettings")}
      </p>
      <ul
        className="text-base font-normal leading-8 ml-6 my-5"
        style={{ listStyle: "outside" }}
      >
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          {t("enableDisable")}
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          {t("pluginSandbox")}
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          {t("apiKeyPlugin")}
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          {t("successPaymentMessage")}
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          {t("failedPaymentMessage")}
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          {t("acceptablePaymentMessage")}
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          {t("mismatchPaymentMessage")}
        </li>
      </ul>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("step")} 4
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("optimizeWooCommerceCheckoutPage")}
      </p>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("step")} 5
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("seamlesslyUse")}
      </p>
      <p
        className={`text-base mt-5 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("dlPluginDesc")}
        <a href={process.env.REACT_APP_WOOCOMMERCE_PLUGIN_URL}>
          {t("downloadLink")}
        </a>
        . {t("pluginBenefits")}
      </p>
    </div>
  );
};
