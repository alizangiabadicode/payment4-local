"use client";
import React, { useEffect, useRef } from "react";
import ErrorsTable from "../shared/error.table";
import { errors } from "./errors.array";
import { useTranslation } from "react-i18next";
import Prism from "prismjs";
require("prismjs/components/prism-javascript");
import "./code.css";
import { Tabs } from "@/components/shared";
import ShowVerifyPaymentTabs from "../../utils/show.payment.api.tabs";
import {
  csCode,
  curlCode,
  dartCode,
  golangCode,
  javaCode,
  jsCode,
  phpCode,
  pythonCode,
  rustCode,
} from "./verify.payment.tabs";

interface CodeRefs {
  paymentCode: React.RefObject<HTMLPreElement>;
  apiKeyCode: React.RefObject<HTMLPreElement>;
  responseCode: React.RefObject<HTMLPreElement>;
}

export const VerifyPayment = () => {
  const { t } = useTranslation();
  const tabs = [
    { label: "Javascript", content: <ShowVerifyPaymentTabs code={jsCode} /> },
    { label: "Java", content: <ShowVerifyPaymentTabs code={javaCode} /> },
    { label: "C#", content: <ShowVerifyPaymentTabs code={csCode} /> },
    { label: "PHP", content: <ShowVerifyPaymentTabs code={phpCode} /> },
    { label: "CURL", content: <ShowVerifyPaymentTabs code={curlCode} /> },
    { label: "Go", content: <ShowVerifyPaymentTabs code={golangCode} /> },
    { label: "Rust", content: <ShowVerifyPaymentTabs code={rustCode} /> },
    { label: "Python", content: <ShowVerifyPaymentTabs code={pythonCode} /> },
    { label: "Dart", content: <ShowVerifyPaymentTabs code={dartCode} /> },
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
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="px-4 py-6">
      <div className="my-5">
        <p
          className={`text-base leading-8 
          dark:text-[#FFFFFFC7] 
          text-[#121212C7] `}
        >
          {t("titleVerifyPayment")}
        </p>
      </div>
      <div
        className={`pb-4 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
      >
        <pre
          className="ml-5 overflow-x-auto !bg-transparent"
          style={{ direction: "ltr" }}
        >
          <code
            ref={codeRefs.paymentCode}
            className="dark:text-white text-black language-javascript"
            style={{ textShadow: "none" }}
          >
            {`
{
  "paymentUid": "7edd9c95-b274-4ae4-8919-53643b6ba504",
  "amount": 100,
  "currency": "USD"
}
            `}
          </code>
        </pre>
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
        text-[#121212C7]  my-3`}
      >
        {t("requestDataVerifyPayment")}
      </p>
      <div
        className={`pb-4 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
      >
        <pre
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
        </pre>
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
        text-[#121212C7]  my-3`}
      >
        {t("apiHeaderVerifyPayment")}
      </p>
      <div
        className={`py-3 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa]`}
      >
        <pre className="ml-5 overflow-x-auto" style={{ direction: "ltr" }}>
          {`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/payment/verify`}
        </pre>
      </div>
      <p className={`text-base leading-8 font-semibold my-5`}>
        {t("verifyPaymentSamples")}
      </p>
      <Tabs tabs={tabs} />
      <p className={`text-base leading-8 font-semibold my-3`}>
        {t("payment4ResponseTitleVerifyPayment")}
      </p>
      <p
        className={`text-base leading-8 
         dark:text-[#FFFFFFC7] 
         text-[#121212C7]  my-3`}
      >
        {t("responseDescriptionVerifyPayment")}
      </p>
      <div
        className={`pb-4 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
      >
        <pre
          className="ml-5 overflow-x-auto !bg-transparent"
          style={{ direction: "ltr" }}
        >
          <code
            ref={codeRefs.responseCode}
            className="dark:text-white text-black language-javascript"
            style={{ textShadow: "none" }}
          >
            {`
{
  "paymentStatus": "PENDING",
  "amountDifference": "-1.1",
  "verified": true
}
            `}
          </code>
        </pre>
        <button
          className="absolute top-2 right-2 px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm"
          onClick={() => handleCopyClick(codeRefs.responseCode)}
        >
          Copy
        </button>
      </div>
      <p
        className={`text-base leading-8 
         dark:text-[#FFFFFFC7] 
         text-[#121212C7]  my-3`}
      >
        {t("amountDifferenceDescVerifyPayment")}
      </p>
      <p className={`text-base leading-8 font-semibold  my-3`}>
        {t("errorsTitleVerifyPayment")}
      </p>
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] 
        text-[#121212C7]  my-3`}
      >
        {t("errorsDescriptionVerifyPayment")}
      </p>
      <div className="bg-gray-100 rounded-lg p-4">
        <ErrorsTable errors={errors} />
      </div>
    </div>
  );
};
