import React from "react";
import ErrorsTable from "../shared/error.table";
import { errors } from "./errors.array";
import useDarkMode from "use-dark-mode";

const CreatePayment = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="space-y-5">
      <div className="flex flex-col my-5">
        <p
          className={`text-base leading-8 ${
            isDark
              ? "text-[#FFFFFFC7] opacity-[78%]"
              : "text-[#121212C7] opacity-[78%]"
          }`}
        >
          When sending transaction details to Payment4, merchants should
          structure their request as follows:
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
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Merchants must also include their API key in the request header:
      </p>
      <div
        className={`pb-1 rounded-lg ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5">
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
        }`}
      >
        The request should be sent using the 'POST' method to the following
        address:
      </p>
      <div
        className={`pb-1 rounded-lg py-4 ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">{`${process.env.BASE_URL}/api/v1/payment`}</pre>
      </div>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Definitions
      </p>
      <ul className="flex flex-col gap-y-4" style={{ listStyle: "outside" }}>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            sandbox : This boolean parameter indicates whether the transaction
            should be treated as a sandbox/test transaction (true) or a
            live/real transaction (false). Setting it to 'false' means that the
            transaction is a live one, and actual funds may be involved.
          </p>
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            currency : The 'currency' field specifies the currency in which the
            transaction amount is expressed. It defines the monetary unit used
            for the payment, such as US Dollars (USD), Euros (EUR), Turkish Lira
            (TRY), British Pounds (GBP), United Arab Emirates Dirhams (AED), or
            Iranian Rials (IRT). The selected currency determines the financial
            denomination of the transaction.default value of currency is 'USD'
          </p>
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            amount : This field specifies the transaction amount, which is the
            monetary value of the payment. In this example, the amount is set to
            5, which means the transaction involves a payment of $5.Any amount
            property that is below the minimum equivalent in dollars will be
            rejected.
          </p>
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            callbackUrl: This URL serves as the redirect destination for the
            payment page after a successful payment. It's important to note that
            it will be a GET request if you want to call an endpoint from the
            backend.
          </p>
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            callbackParams : This is an object that allows merchants to include
            additional parameters or data to be sent along with the callback to
            their system.
          </p>
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            webhookUrl : Similar to the callback URL, this is the URL where
            Payment4 will send webhook notifications, which can be used for more
            real-time updates or automation.
          </p>
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            webhookParams : Just like the callbackParams, this object allows
            merchants to send additional parameters along with the webhook
            notification.
          </p>
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            language : This field specifies the language in which Payment4
            should provide responses.
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
        Payment4 Response:
      </p>
      <div
        className={`pb-1 rounded-lg  ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#f6f8fa]"
        }`}
      >
        <pre className="ml-5 overflow-x-auto">
          <code style={{ color: isDark ? "white" : "black" }}>
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
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-5`}
      >
        Types of errors
      </p>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } my-5`}
      >
        In case of errors, Payment4 provides informative error messages.
      </p>
      <div className="pb-1 bg-gray-200 rounded-lg">
        <ErrorsTable errors={errors} />
      </div>
    </div>
  );
};

export default CreatePayment;
