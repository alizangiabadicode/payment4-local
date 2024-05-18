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
    { label: "Golang", content: <ShowVerifyPaymentTabs code={golangCode} /> },
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
        className={`py-3 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa]`}
      >
        <pre className="ml-5 overflow-x-auto" style={{ direction: "ltr" }}>
          {`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/payment/verify`}
        </pre>
      </div>
      <p className={`text-base leading-8 font-semibold my-5`}>
        {t('verifyPaymentSamples')}
      </p>
      <Tabs tabs={tabs} />
      <p className={`text-base leading-8  my-3`}>
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
