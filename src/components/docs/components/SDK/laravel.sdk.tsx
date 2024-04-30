import React from "react";
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

export const LaravelSDKSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <p
        className={`text-base font-normal dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("introduction")}
      </p>
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("sdkNodeDesc")}
      </p>

      <p
        className={`text-base font-normal mt-5 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("installation")}
      </p>
      <div className="command-box mt-2">
        <span className="command-label">{t('runTheFollowingCommand')}</span>
        <CodeBox
          code="composer require payment4/cryptogateway"
          style={{ height: "auto" }}
        />
      </div>

      <p
        className={`text-base font-normal mt-5 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("requirements")}
      </p>
      {/* <p
        className={`text-base font-normal mt-2 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        <CodeBox
          style={{ height: "14dvh", textAlign: "left" }}
          code={requirementCode}
        />
      </p> */}
      <CodeBox
        style={{ height: "14dvh", textAlign: "left" }}
        code={requirementCode}
      />
      <p
        className={`text-base font-normal mt-5 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("configuration")}
      </p>
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("addApiKey")}
      </p>
      <CodeBox style={{ height: "7dvh" }} code={configurationCode} />
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("addApiKeyDesc")}
      </p>
      <CodeBox
        style={{ height: "7dvh" }}
        code="PAYMENT4_API_KEY = __YOUR_API_KEY"
      />
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("usingCallbackUrl")}
      </p>
      <CodeBox style={{ height: "10dvh" }} code={callbackUrlCode} />
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("usingWebhookUrl")}
      </p>
      <CodeBox style={{ height: "8dvh" }} code={webhookUrlCode} />

      <p
        className={`text-base font-normal mt-5 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("usage")}
      </p>
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("createPayment4Instance")}
      </p>
      <CodeBox style={{ minHeight: "43dvh" }} code={instanceCode} />

      <p
        className={`text-base font-normal mt-5 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        API
      </p>
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7] 
          text-[#121212C7] `}
      >
        {t("requestingAPayment")}
      </p>
      <CodeBox style={{ minHeight: "116dvh" }} code={requestingPaymentCode} />
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("nodeSdkSupportedLanguages")}
      </p>
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("nodeSdkSupportedCurrencies")}
      </p>
      <p
        className={`text-base font-normal mt-2 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("verifyingAPayment")}
      </p>
      <CodeBox style={{ height: "40dvh" }} code={verifyPaymentCode} />
    </div>
  );
};
