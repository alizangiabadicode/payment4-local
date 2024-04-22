import React from "react";
import ErrorsTable from "../shared/error.table";
import { errors } from "./errors.array";
import { useTranslation } from "react-i18next";

export const VerifyPayment = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-6">
      <div className="my-5">
        <p
          className={`text-base leading-8 
          dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
          text-[#121212C7] text-opacity-[78%]`}
        >
          {t("titleVerifyPayment")}
        </p>
      </div>
      <div
        className={`pb-1 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa]`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code className="dark:text-white text-black">
            {`
{
  "paymentUid": "7edd9c95-b274-4ae4-8919-53643b6ba504",
  "amount": 100,
  "currency": "USD"
}
            `}
          </code>
        </pre>
      </div>
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
        text-[#121212C7] text-opacity-[78%] my-3`}
      >
        {t("requestDataVerifyPayment")}
      </p>
      <div
        className={`pb-1 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa]`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code className="dark:text-white text-black">
            {`
{
  "x-api-key" : {api_key}
}
            `}
          </code>
        </pre>
      </div>
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
        text-[#121212C7] text-opacity-[78%] my-3`}
      >
        {t("apiHeaderVerifyPayment")}
      </p>
      <div
        className={`py-3 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa]`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code className="dark:text-white text-black">{`${process.env.BASE_URL}/api/v1/payment/verify`}</code>
        </pre>
      </div>
      <p
        className={`text-base leading-8 
         dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
         text-[#121212C7] text-opacity-[78%] my-3`}
      >
        {t("payment4ResponseTitleVerifyPayment")}
      </p>
      <p
        className={`text-base leading-8 
         dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
         text-[#121212C7] text-opacity-[78%] my-3`}
      >
        {t("responseDescriptionVerifyPayment")}
      </p>
      <div
        className={`pb-1 rounded-lg 
       dark:bg-[#FFFFFF08] bg-[#f6f8fa]`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code className="dark:text-white text-black">
            {`
{
  "paymentStatus": "PENDING",
  "amountDifference": "-1.1",
  "verified": true
}
            `}
          </code>
        </pre>
      </div>
      <p
        className={`text-base leading-8 
         dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
         text-[#121212C7] text-opacity-[78%] my-3`}
      >
        {t("amountDifferenceDescVerifyPayment")}
      </p>
      <p
        className={`text-base leading-8 
         dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
         text-[#121212C7] text-opacity-[78%] my-3`}
      >
        {t("errorsTitleVerifyPayment")}
      </p>
      <p
        className={`text-base leading-8 
        dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
        text-[#121212C7] text-opacity-[78%] my-3`}
      >
        {t("errorsDescriptionVerifyPayment")}
      </p>
      <div className="bg-gray-100 rounded-lg p-4">
        <ErrorsTable errors={errors} />
      </div>
    </div>
  );
};
