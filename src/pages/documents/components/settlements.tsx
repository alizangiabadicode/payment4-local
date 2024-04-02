import React from "react";
import useDarkMode from "use-dark-mode";

const Settlements = () => {
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
        Merchants have the flexibility to choose which cryptocurrencies they
        accept, including popular options like BTC and ETH. For each
        cryptocurrency, they must provide an address to receive the funds.
        Notably, Payment4 does not hold funds from the merchant's customers.
        After each payment, the full amount, minus the transaction fee, is
        promptly transferred to the merchant's predetermined receiving address.
      </p>
    </div>
  );
};

export default Settlements;
