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
      <p className={`text-[17px] font-normal`}>{t("introduction")}</p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("sdkNodeDesc")}
      </p>

      <p className={`text-[17px] font-normal mt-5`}>{t("installation")}</p>
      <div className="command-box mt-2">
        <span
          className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
        >
          {t("runTheFollowingCommand")}
        </span>
        <CodeBox
          code={`\ncomposer require payment4/cryptogateway`}
          style={{ height: "auto" }}
        />
      </div>

      <p className={`text-[17px] font-normal mt-5`}>{t("requirements")}</p>
      <CodeBox
        style={{ height: "14dvh", textAlign: "left" }}
        code={requirementCode}
      />
      <p className={`font-normal mt-5 `}>{t("configuration")}</p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("addApiKey")}
      </p>
      <CodeBox style={{ height: "7dvh" }} code={configurationCode} />
      <p
        className={`text-[15px] font-normal my-[20px] dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("addApiKeyDesc")}
      </p>
      <CodeBox
        style={{ height: "7dvh" }}
        code={`\nPAYMENT4_API_KEY = __YOUR_API_KEY`}
      />
      <p
        className={`text-[15px] font-normal my-[20px] dark:text-[#FFFFFFC7]
          text-[#121212C7] `}
      >
        {t("usingCallbackUrl")}
      </p>
      <CodeBox style={{ height: "10dvh" }} code={callbackUrlCode} />
      <p
        className={`text-[15px] font-normal my-[20px] dark:text-[#FFFFFFC7]
        text-[#121212C7] `}
      >
        {t("usingWebhookUrl")}
      </p>
      <CodeBox style={{ height: "8dvh" }} code={webhookUrlCode} />

      <p className={`text-[17px] font-normal mt-5 `}>{t("usage")}</p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7]  text-[#121212C7] `}
      >
        {t("createPayment4Instance")}
      </p>
      <CodeBox style={{ minHeight: "43dvh" }} code={instanceCode} />

      <p className={`text-[17px] font-normal mt-5`}>API</p>
      <p
        className={`text-[15px] font-normal mt-2 dark:text-[#FFFFFFC7] 
          text-[#121212C7] `}
      >
        {t("requestingAPayment")}
      </p>
      <CodeBox style={{ minHeight: "115dvh" }} code={requestingPaymentCode} />
      <p
        className={`text-[15px] font-normal my-2 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("nodeSdkSupportedLanguages")}
      </p>
      <p
        className={`text-[15px] font-normal my-2 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("nodeSdkSupportedCurrencies")}
      </p>
      <p className={`text-[17px] font-normal my-5`}>{t("verifyingAPayment")}</p>
      <CodeBox style={{ height: "40dvh" }} code={verifyPaymentCode} />
    </div>
  );
};
