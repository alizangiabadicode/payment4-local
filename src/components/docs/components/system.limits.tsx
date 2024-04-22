import React from "react";
import { useTranslation } from "react-i18next";

export const SystemLimits = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ul className="flex flex-col gap-y-6" style={{ listStyle: "outside" }}>
        <li className="dark:text-white text-black">
          <p
            className={`text-base leading-8 
                dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
                text-[#121212C7] text-opacity-[78%]
            `}
          >
            {t("systemLimitOne")}
          </p>
        </li>
        <li className="dark:text-white text-black">
          <p
            className={`text-base leading-8 
           dark:text-[#FFFFFFC7] dark:text-opacity-[78%]
           text-[#121212C7] text-opacity-[78%]
       `}
          >
            {t("systemLimitTwo")}
          </p>
        </li>
      </ul>
    </div>
  );
};
