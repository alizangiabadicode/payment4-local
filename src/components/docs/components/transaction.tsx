import { t } from "i18next";
import { useTheme } from "next-themes";
import React from "react";
import useDarkMode from "use-dark-mode";

const TransactionSection = () => {
  const { resolvedTheme: isDark } = useTheme();
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
            {t("transactionTxtOne")}
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
            {t("transactionTxtTwo")}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TransactionSection;
