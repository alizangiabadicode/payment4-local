import React from "react";
import ErrorsTable from "../shared/error.table";
import { errors } from "./errors.array";
import useDarkMode from "use-dark-mode";

const VerifyPayment = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="px-4 py-6">
      <div className="my-5">
        <p
          className={`text-base leading-8 ${
            isDark
              ? "text-[#FFFFFFC7] opacity-[78%]"
              : "text-[#121212C7] opacity-[78%]"
          }`}
        >
          Verifying transactions in Payment4 is crucial to ensure accuracy and
          security. Merchants can initiate this process by sending the following
          data in the request body:
        </p>
      </div>
      <div
        className={`pb-1 rounded-lg ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code style={{ color: isDark ? "white" : "black" }}>
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
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-3`}
      >
        The API key must be included in the request header:
      </p>
      <div
        className={`pb-1 rounded-lg ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code style={{ color: isDark ? "white" : "black" }}>
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
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-3`}
      >
        Merchants should send their request by 'PUT' method to the address
        below:
      </p>
      <div
        className={`py-3 rounded-lg ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code
            style={{ color: isDark ? "white" : "black" }}
          >{`${process.env.BASE_URL}/api/v1/payment/verify`}</code>
        </pre>
      </div>
      <h5
        className={`text-lg leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-3`}
      >
        Payment4 Response
      </h5>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-3`}
      >
        Upon verification, Payment4 responds with:
      </p>
      <div
        className={`pb-1 rounded-lg ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code style={{ color: isDark ? "white" : "black" }}>
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
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-3`}
      >
        You only receive 'amountDifference' when the payment status is
        'ACCEPTABLE' or 'MISMATCH'.
      </p>
      <h5
        className={`text-lg leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-3`}
      >
        Types of errors
      </h5>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-3`}
      >
        In cases of verification errors, Payment4 provides detailed error
        messages, including:
      </p>
      <div className="bg-gray-100 rounded-lg p-4">
        <ErrorsTable errors={errors} />
      </div>
    </div>
  );
};

export default VerifyPayment;
