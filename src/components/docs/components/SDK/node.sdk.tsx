import React from "react";
import {
  configurationCode,
  requestingPaymentCode,
  verifyPaymentCode,
} from "./node.sdk.codes";
import { CodeBox } from "../shared/code.box/code.box";
import { useTranslation } from "react-i18next";

export const NodeSDKSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5 mb-10">
      <p
        className={`text-[17px] font-normal`}
      >
        {t("introduction")}
      </p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7] dark: text-[#121212C7] `}
      >
        {t("sdkNodeDesc")}
      </p>

      <p className={`text-[17px] font-normal mt-5`}>{t("installation")}</p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7] dark: text-[#121212C7] `}
      >
        {t("nodeSdkStart")}
      </p>
      <div className="command-box mt-2" style={{ textAlign: "left" }}>
        <CodeBox code={`\nnpm install payment4`} style={{ height: "auto" }} />
      </div>

      <p
        className={`text-[17px] font-normal mt-5`}
      >
        {t("configuration")}
      </p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7] dark: text-[#121212C7] `}
      >
        {t("nodeSdkConfiguration")}
      </p>
      <CodeBox code={configurationCode} />

      <p
        className={`text-[17px] font-normal mt-5`}
      >
        API
      </p>

      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7] dark: text-[#121212C7] `}
      >
        {t("requestingAPayment")}
      </p>
      <CodeBox code={requestingPaymentCode} />
      <p
        className={`text-[15px] font-normal mt-[25px] dark:text-[#FFFFFFC7] dark: text-[#121212C7] `}
      >
        {t("nodeSdkSupportedLanguages")}
      </p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7] dark: text-[#121212C7] `}
      >
        {t("nodeSdkSupportedCurrencies")}
      </p>

      <p
        className={`text-[17px] mt-5 `}
      >
        {t("verifyingAPayment")}
      </p>
      <CodeBox code={verifyPaymentCode} />
    </div>
  );
};
