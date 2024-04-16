import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { CodeBox } from "../shared/code.box/code.box";
import {
  callbackUrlCode,
  configurationCode,
  instanceCode,
  requestingPaymentCode,
  requirementCode,
  verifyPaymentCode,
  webhookUrlCode,
} from "./laravel.sdk.codes";
import useDarkMode from "use-dark-mode";
import { t } from "i18next";
import { useTheme } from "next-themes";

export const LaravelSDKSection = () => {
  const { resolvedTheme: isDark } = useTheme();

  return (
    <div className="mt-5">
      <p
        className={`text-base font-semibold ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("introduction")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("sdkNodeDesc")}
      </p>

      <p
        className={`text-base font-semibold mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("installation")}
      </p>
      <div className="command-box mt-2" style={{ textAlign: "left" }}>
        <span className="command-label">Run the following command :</span>
        <CodeBox
          code="composer require payment4/cryptogateway"
          style={{ height: "auto" }}
        />
      </div>

      <p
        className={`text-base font-normal mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("requirements")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        <CodeBox
          style={{ height: "14dvh", textAlign: "left" }}
          code={requirementCode}
        />
      </p>

      <p
        className={`text-base font-normal mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("configuration")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("addApiKey")}
      </p>
      <CodeBox style={{ height: "7dvh" }} code={configurationCode} />
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("addApiKeyDesc")}
      </p>
      <CodeBox
        style={{ height: "7dvh" }}
        code="PAYMENT4_API_KEY = __YOUR_API_KEY"
      />
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("usingCallbackUrl")}
      </p>
      <CodeBox style={{ height: "10dvh" }} code={callbackUrlCode} />
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("usingWebhookUrl")}
      </p>
      <CodeBox style={{ height: "8dvh" }} code={webhookUrlCode} />

      <p
        className={`text-base font-normal mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("usage")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("createPayment4Instance")}
      </p>
      <CodeBox style={{ minHeight: "43dvh" }} code={instanceCode} />

      <p
        className={`text-base font-normal mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        API
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("requestingAPayment")}
      </p>
      <CodeBox style={{ minHeight: "116dvh" }} code={requestingPaymentCode} />
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("nodeSdkSupportedLanguages")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("nodeSdkSupportedCurrencies")}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("verifyingAPayment")}
      </p>
      <CodeBox style={{ height: "40dvh" }} code={verifyPaymentCode} />
    </div>
  );
};
