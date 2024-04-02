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

export const LaravelSDKSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="mt-5">
      <p
        className={`text-base font-semibold ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Introduction
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        This SDK allows merchants to seamlessly integrate Payment4's crypto
        gateway into their systems, enabling secure and efficient cryptocurrency
        transactions.
      </p>

      <p
        className={`text-base font-semibold mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Installation
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        This SDK allows merchants to seamlessly integrate Payment4's crypto
        gateway into their systems, enabling secure and efficient cryptocurrency
        transactions.
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
        Requirements
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
        Configuration
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Add your APIKEY in Payment4 config.
      </p>
      <CodeBox style={{ height: "7dvh" }} code={configurationCode} />
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        You can add your APIKEY to .env file, please look at to following
        example :
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
        If you use callbackUrl as a static URL you can set it here, otherwise,
        leave it blank.
      </p>
      <CodeBox style={{ height: "10dvh" }} code={callbackUrlCode} />
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        If you use webhookUrl as a static URL you can set it here, otherwise,
        leave it blank.
      </p>
      <CodeBox style={{ height: "8dvh" }} code={webhookUrlCode} />

      <p
        className={`text-base font-normal mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Usage{" "}
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Create Payment4 instance
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
        Requesting a Payment
      </p>
      <CodeBox style={{ minHeight: "116dvh" }} code={requestingPaymentCode} />
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Supported Languages are 'en' and 'fa'
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Supported Currencies are 'USD', 'EUR', 'TRY', 'GBP', 'AED', 'IRT'
      </p>
      <p
        className={`text-base font-normal mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Verifying a Payment
      </p>
      <CodeBox style={{ height: "40dvh" }} code={verifyPaymentCode} />
    </div>
  );
};
