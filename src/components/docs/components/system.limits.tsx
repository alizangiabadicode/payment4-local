import React from "react";
import { useTranslation } from "react-i18next";

export const SystemLimits = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-3">
      <ul className="flex flex-col gap-y-6" style={{ listStyle: "outside" }}>
        <li className="dark:text-white text-black">
          <p
            className={`text-base leading-8 
                dark:text-[#FFFFFFC7] 
                text-[#121212C7] 
            `}
          >
            {t("systemLimitOne")}
          </p>
        </li>
        <li className="dark:text-white text-black">
          <p
            className={`text-base leading-8 
           dark:text-[#FFFFFFC7] 
           text-[#121212C7] 
       `}
          >
            {t("systemLimitTwo")}
          </p>
        </li>
      </ul>
    </div>
  );
};
