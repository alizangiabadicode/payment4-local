import React from "react";
import { useTranslation } from "react-i18next";


export const ContactUsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3 px-4 py-5 mt-3">
      <p
        className={`text-base font-normal leading-8 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("docContactUs")}
      </p>
      <p
        className={`text-base font-normal leading-8 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        Email: support@payment4.com
      </p>
      <p
        className={`text-base font-normal leading-8 dark:text-[#FFFFFFC7] 
         text-[#121212C7] `}
      >
        {t("committedTeam")}
      </p>
    </div>
  );
};

export default ContactUsSection;
