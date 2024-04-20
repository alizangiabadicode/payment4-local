"use client";
import React from "react";
import ErrorsTable from "../shared/error.table";
import { errors } from "./errors.array";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export const CreatePayment = () => {
  const { t } = useTranslation();
  const { resolvedTheme: isDark } = useTheme();

  return (
    <div className="space-y-5">
      <div className="flex flex-col my-5">
        <p
          className={`text-base leading-8 ${
            isDark === "dark"
              ? "text-[#FFFFFFC7] opacity-[78%]"
              : "text-[#121212C7] opacity-[78%]"
          }`}
        >
          {t("titleCreatePayment")}
        </p>
      </div>
      <div
        className={`pb-1 rounded-lg ${
          isDark === "dark" ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code style={{ color: isDark === "dark" ? "white" : "black" }}>
            {`
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
          </code>
        </pre>
      </div>
      <p
        className={`text-base leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("apiHeaderCreatePayment")}
      </p>
      <div
        className={`pb-1 rounded-lg ${
          isDark === "dark" ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5">
          <code style={{ color: isDark === "dark" ? "white" : "black" }}>
            {`
{
    "x-api-key" : {api_key}
}
`}
          </code>
        </pre>
      </div>
      <p
        className={`text-base leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("requestSentToCreatePayment")}
      </p>
      <div
        className={`pb-1 rounded-lg py-4 ${
          isDark === "dark" ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">{`${process.env.BASE_URL}/api/v1/payment`}</pre>
      </div>
      <p
        className={`text-base leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("definitionsCreatePayment")}
      </p>
      <ul className="flex flex-col gap-y-4" style={{ listStyle: "outside" }}>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("sandboxCreatePayment")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("currencyCreatePayment")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("amountCreatePayment")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("callbackUrlCreatePayment")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("callbackParamsCreatePayment")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("webhookUrlCreatePayment")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("webhookParamsCreatePayment")}
          </p>
        </li>
        <li className={`${isDark === "dark" ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark === "dark"
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            {t("languageCreatePayment")}
          </p>
        </li>
      </ul>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("responseTitleCreatePayment")}
      </p>
      <div
        className={`pb-1 rounded-lg  ${
          isDark === "dark" ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code style={{ color: isDark === "dark" ? "white" : "black" }}>
            {`
{
  "id": 0,
  "paymentUid": "string",
  "paymentUrl": "string"
}
`}
          </code>
        </pre>
      </div>
      <p
        className={`text-base leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-5`}
      >
        {t("errorsTitleCreatePayment")}
      </p>
      <p
        className={`text-base leading-8 ${
          isDark === "dark"
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-5`}
      >
        {t("errorsDescriptionCreatePayment")}
      </p>
      <div className="pb-1 bg-gray-200 rounded-lg">
        <ErrorsTable errors={errors} />
      </div>
    </div>
  );
};