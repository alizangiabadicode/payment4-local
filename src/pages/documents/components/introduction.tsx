import React from "react";
import useDarkMode from "use-dark-mode";

const Introduction = () => {
  const { value: isDark } = useDarkMode();
  return (
    <div>
      <p
        className={`text-[16px] leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        The Payment4 Payment Gateway is a web-based service designed to
        facilitate cryptocurrency payments and blockchain transactions for
        businesses and individuals. It empowers you to integrate blockchain
        transactions and cryptocurrency payments into your online store and
        digital services, utilizing the capabilities of Payment4.
      </p>
    </div>
  );
};

export default Introduction;
