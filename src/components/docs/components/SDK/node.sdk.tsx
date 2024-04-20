"use client";

import React from "react";
import {
  configurationCode,
  requestingPaymentCode,
  verifyPaymentCode,
} from "./node.sdk.codes";
import { CodeBox } from "../shared/code.box/code.box";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export const NodeSDKSection = () => {
  const { resolvedTheme: isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="mt-5 mb-10">
      <p
        className={`text-base font-semibold ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("introduction")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("sdkNodeDesc")}
      </p>

      <p
        className={`text-base font-semibold mt-5 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("installation")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("nodeSdkStart")}
      </p>
      <div className="command-box mt-2" style={{ textAlign: "left" }}>
        <CodeBox code="npm install payment4" style={{ height: "auto" }} />
      </div>

      <p
        className={`text-base font-semibold mt-5 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("configuration")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("nodeSdkConfiguration")}
      </p>
      <CodeBox code={configurationCode} />

      <p
        className={`text-base font-semibold mt-5 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        API
      </p>

      <p
        className={`text-base font-semibold mt-2 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("requestingAPayment")}
      </p>
      <CodeBox code={requestingPaymentCode} />
      <p
        className={`text-base font-normal mt-2 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("nodeSdkSupportedLanguages")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("nodeSdkSupportedCurrencies")}
      </p>

      <p
        className={`text-base font-semibold mt-5 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("verifyingAPayment")}
      </p>
      <CodeBox code={verifyPaymentCode} />
    </div>
  );
};
