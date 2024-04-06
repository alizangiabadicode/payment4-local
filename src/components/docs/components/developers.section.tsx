import { t } from "i18next";
import React from "react";
import useDarkMode from "use-dark-mode";

const DevelopersSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="px-4 py-5">
      <p
        className={`text-base font-semibold leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t('developerDesc')}
      </p>
    </div>
  );
};

export default DevelopersSection;
