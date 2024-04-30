import React from "react";
import { useTranslation } from "react-i18next";

export const TransactionSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-3">
      <ul className="flex flex-col gap-8" style={{ listStyle: "outside" }}>
        <li className={` dark:text-white text-black`}>
          <p
            className={`text-base leading-8
                 dark:text-[#FFFFFFC7] 
                text-[#121212C7]`}
          >
            {t("transactionTxtOne")}
          </p>
        </li>
        <li className={` dark:text-white text-black`}>
          <p
            className={`text-base leading-8
            dark:text-[#FFFFFFC7] 
           text-[#121212C7]`}
          >
            {t("transactionTxtTwo")}
          </p>
        </li>
      </ul>
    </div>
  );
};
