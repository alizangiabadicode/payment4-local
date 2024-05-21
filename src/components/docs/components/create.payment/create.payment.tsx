"use client";

import React, { useEffect, useRef } from "react";
import ErrorsTable from "../shared/error.table";
import { errors } from "./errors.array";
import { useTranslation } from "react-i18next";
// import Prism from "prismjs";
// require("prismjs/components/prism-javascript");
import { Highlight, themes } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/dracula";

import "./code.css";
import { Tabs } from "@/components/shared";
import ShowCreatePaymentTabs from "../../utils/show.payment.api.tabs";
import {
  cs,
  curlCode,
  dartCode,
  golangCode,
  javaCode,
  jsCode,
  phpCode,
  pythonCode,
  rustCode,
  tsCode,
} from "./create.payment.tabs";
import { useTheme } from "next-themes";
// require("prismjs/themes/prism-dark.css");
// require("prismjs/themes/prism.css")
// const importDarkTheme = () => require("prismjs/themes/prism-dark.css");
// const importLightTheme = () => require("prismjs/themes/prism.css");

interface CodeRefs {
  paymentCode: React.RefObject<HTMLPreElement>;
  apiKeyCode: React.RefObject<HTMLPreElement>;
  responseCode: React.RefObject<HTMLPreElement>;
}

export const CreatePayment = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const tabs = [
    { label: "Javascript", content: <ShowCreatePaymentTabs code={jsCode} /> },
    { label: "Typescript", content: <ShowCreatePaymentTabs code={tsCode} /> },
    { label: "Java", content: <ShowCreatePaymentTabs code={javaCode} /> },
    { label: "C#", content: <ShowCreatePaymentTabs code={cs} /> },
    { label: "PHP", content: <ShowCreatePaymentTabs code={phpCode} /> },
    { label: "CURL", content: <ShowCreatePaymentTabs code={curlCode} /> },
    { label: "Go", content: <ShowCreatePaymentTabs code={golangCode} /> },
    { label: "Rust", content: <ShowCreatePaymentTabs code={rustCode} /> },
    { label: "Python", content: <ShowCreatePaymentTabs code={pythonCode} /> },
    { label: "Dart", content: <ShowCreatePaymentTabs code={dartCode} /> },
  ];
  const codeRefs: CodeRefs = {
    paymentCode: useRef<HTMLPreElement | null>(null),
    apiKeyCode: useRef<HTMLPreElement | null>(null),
    responseCode: useRef<HTMLPreElement | null>(null),
  };
  const handleCopyClick = (ref: React.RefObject<HTMLPreElement>) => {
    const codeElement = ref.current;
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || "");
    }
  };
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);

  // useEffect(() => {
  //   if (resolvedTheme === "dark") {
  //     require("prismjs/themes/prism-dark.css")
  //     //
  //     return;
  //   }
  //   require("prismjs/themes/prism.css")
  // }, [resolvedTheme]);
  // useEffect(() => {
  //   if (resolvedTheme === "dark") {
  //     require("prismjs/themes/prism-dark.css");
  //   } else {
  //     require("prismjs/themes/prism.css");
  //   }
  // }, [resolvedTheme]);
  return (
    <div className="space-y-5">
      <div className="flex flex-col my-5">
        <p
          className={`text-base leading-8 
               dark:text-[#FFFFFFC7] 
               text-[#121212C7] `}
        >
          {t("titleCreatePayment")}
        </p>
      </div>
      <div
        className={`pb-4 rounded-lg 
          dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
      >
        <Highlight
          theme={resolvedTheme === "dark" ? themes.oneDark : themes.oneLight}
          code={`
          {
            "sandBox": false,
            "currency":"USD",
            "amount": 5,
            "callbackUrl": "https://your-domain/payment",
            "callbackParams": {
              "your_key": "your value"
            },
            "webhookUrl": "https://your-domain/payment/webhook/",
            "webhookParams": {
              "your_key": "your value"
            },
            "language": "EN"
          }
          `}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} py-[10px] ml-[30px] overflow-x-auto !bg-transparent`}
              style={{ ...style, direction: "ltr" }}
              ref={codeRefs.paymentCode}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line
                    .filter((token) => !token.types.includes("plain"))
                    .map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })}></span>
                    ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <button
          className="absolute top-2 right-2 px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm"
          onClick={() => handleCopyClick(codeRefs.paymentCode)}
        >
          Copy
        </button>
      </div>
      <p
        className={`text-base leading-8 
       dark:text-[#FFFFFFC7] 
       text-[#121212C7] `}
      >
        {t("apiHeaderCreatePayment")}
      </p>
      <div
        className={`pb-4 rounded-lg
          dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
      >
        <Highlight
          theme={resolvedTheme === "dark" ? themes.dracula : themes.oneLight}
          code={`
          {
            "x-api-key" : {api_key}
        }
          `}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} py-[10px] ml-[30px] overflow-x-auto !bg-transparent`}
              style={{ ...style, direction: "ltr" }}
              ref={codeRefs.apiKeyCode}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line
                    .filter((token) => !token.types.includes("plain"))
                    .map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })}></span>
                    ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        {/* <pre
          className="ml-5 overflow-x-auto !bg-transparent"
          style={{ direction: "ltr" }}
        >
          <code
            ref={codeRefs.apiKeyCode}
            className="dark:text-white text-black language-javascript"
            style={{ textShadow: "none" }}
          >
            {`
{
    "x-api-key" : {api_key}
}
`}
          </code>
        </pre> */}
        <button
          className="absolute top-2 right-2 px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm"
          onClick={() => handleCopyClick(codeRefs.apiKeyCode)}
        >
          Copy
        </button>
      </div>
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] 
        text-[#121212C7] `}
      >
        {t("requestSentToCreatePayment")}
      </p>
      <div
        className={`py-4 rounded-lg
         dark:bg-[#FFFFFF08] bg-[#f6f8fa]`}
      >
        <pre
          className="ml-5 overflow-x-auto"
          style={{ direction: "ltr" }}
        >{`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/payment`}</pre>
      </div>
      <p className={`text-base leading-8 font-semibold`}>
        {t("createPaymentSamples")}
      </p>
      <Tabs tabs={tabs} />
      <p className={`text-[20px] leading-8 font-semibold `}>
        {t("definitionsCreatePayment")}
      </p>
      <ul className="flex flex-col gap-y-4" style={{ listStyle: "outside" }}>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
            dark:text-[#FFFFFFC7] 
            text-[#121212C7] `}
          >
            {t("sandboxCreatePayment")}
          </p>
        </li>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
            dark:text-[#FFFFFFC7] 
            text-[#121212C7] `}
          >
            {t("currencyCreatePayment")}
          </p>
        </li>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
           dark:text-[#FFFFFFC7] 
           text-[#121212C7] `}
          >
            {t("amountCreatePayment")}
          </p>
        </li>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
           dark:text-[#FFFFFFC7] 
           text-[#121212C7] `}
          >
            {t("callbackUrlCreatePayment")}
          </p>
        </li>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
            dark:text-[#FFFFFFC7] 
            text-[#121212C7] `}
          >
            {t("callbackParamsCreatePayment")}
          </p>
        </li>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
           dark:text-[#FFFFFFC7] 
           text-[#121212C7] `}
          >
            {t("webhookUrlCreatePayment")}
          </p>
        </li>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
            dark:text-[#FFFFFFC7] 
            text-[#121212C7] `}
          >
            {t("webhookParamsCreatePayment")}
          </p>
        </li>
        <li className={`dark:text-white text-black`}>
          <p
            className={`text-base leading-8 
            dark:text-[#FFFFFFC7] 
            text-[#121212C7] `}
          >
            {t("languageCreatePayment")}
          </p>
        </li>
      </ul>
      <p
        className={`text-base leading-8 
       dark:text-[#FFFFFFC7] 
       text-[#121212C7] `}
      >
        {t("responseTitleCreatePayment")}
      </p>
      <div
        className={`pb-4 rounded-lg
        dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
      >
        <Highlight
          theme={resolvedTheme === "dark" ? themes.oneDark : themes.oneLight}
          code={`
          {
            "id": 0,
            "paymentUid": "string",
            "paymentUrl": "string"
          }
          `}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} py-[10px] ml-[30px] overflow-x-auto !bg-transparent`}
              style={{ ...style, direction: "ltr" }}
              ref={codeRefs.responseCode}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line
                    .filter((token) => !token.types.includes("plain"))
                    .map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })}></span>
                    ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <button
          className="absolute top-2 right-2 px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm"
          onClick={() => handleCopyClick(codeRefs.responseCode)}
        >
          Copy
        </button>
      </div>
      <p className={`text-base leading-8  my-5`}>
        {t("errorsTitleCreatePayment")}
      </p>
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] 
        text-[#121212C7]  my-5`}
      >
        {t("errorsDescriptionCreatePayment")}
      </p>
      <div className="pb-4 bg-gray-200 rounded-lg">
        <ErrorsTable errors={errors} />
      </div>
    </div>
  );
};
