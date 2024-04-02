import React from "react";
import useDarkMode from "use-dark-mode";

const ApiSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Merchants can use the API to initiate transactions by specifying the
        "coin," "fiat amount," and other relevant details. Payment4 generates a
        wallet address for the transaction, calculates the required
        cryptocurrency amount for the payment, and sends this information back
        to the merchant. Merchants must then display the generated address and
        amount to their customers, monitoring the transaction status with
        Payment4. When customers pay the specified amount to the address,
        Payment4 responds with a "success" status. In this API-based method,
        merchants are responsible for implementing the payment procedures on
        their websites or apps, while Payment4 handles the blockchain-related
        processes.
      </p>
    </div>
  );
};

export default ApiSection;
