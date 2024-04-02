import React from "react";
import useDarkMode from "use-dark-mode";

const TransactionSection = () => {
  const { value: isDark } = useDarkMode();
  return (
    <div>
      <ul className="flex flex-col gap-8" style={{ listStyle: "outside" }}>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            Every transaction follows a defined path from initiation to
            settlement. The status of each transaction is meticulously recorded
            at every stage, allowing for real-time tracking through the merchant
            system. A unique token is assigned to each transaction, granting
            access to its details. Transaction status is separately displayed in
            the table below, and in Payment4's data models, it is represented as
            the 'status.'
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
            Testing and Sandbox Environment : Before going live with real
            transactions, we encourage you to test your integration in a sandbox
            environment. This allows you to simulate transactions and ensure
            that everything works as expected. You can access our sandbox
            environment by [instructions on how to access the sandbox
            environment].
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TransactionSection;
