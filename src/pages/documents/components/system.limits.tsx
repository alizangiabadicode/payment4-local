import React from "react";
import useDarkMode from "use-dark-mode";

const SystemLimits = () => {
  const { value: isDark } = useDarkMode();
  return (
    <div>
      <ul className="flex flex-col gap-y-6" style={{ listStyle: "outside" }}>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          <p
            className={`text-base leading-8 ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            Global Minimum Transaction Amount Limit: Payment4 enforces a global
            minimum transaction amount of $5, irrespective of the chosen
            cryptocurrency (BTC, ETH, etc.). Transactions with amounts less than
            $5 will be rejected.
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
            Rate Limits and Usage Policies: Payment4 may have rate limits on API
            usage to ensure fair and efficient utilization of our services.
            Please refer to our API documentation for detailed rate limit
            information and usage policies.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SystemLimits;
