import React from "react";
import {
  configurationCode,
  requestingPaymentCode,
  verifyPaymentCode,
} from "./node.sdk.codes";
import { CodeBox } from "../shared/code.box/code.box";
import useDarkMode from "use-dark-mode";

export const NodeSDKSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="mt-5 mb-10">
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
        To get started with the Crypto Gateway Node SDK, follow these simple
        installation steps:
      </p>
      <div className="command-box mt-2" style={{ textAlign: "left" }}>
        <CodeBox code="npm install payment4" style={{ height: "auto" }} />
      </div>

      <p
        className={`text-base font-semibold mt-5 ${
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
        Configure the SDK with your merchant-specific settings by following
        these steps:
      </p>
      <CodeBox code={configurationCode} />

      <p
        className={`text-base font-semibold mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        API
      </p>

      <p
        className={`text-base font-semibold mt-2 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Requesting a Payment
      </p>
      <CodeBox code={requestingPaymentCode} />
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
        className={`text-base font-semibold mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Verifying a Payment
      </p>
      <CodeBox code={verifyPaymentCode} />
    </div>
  );
};
