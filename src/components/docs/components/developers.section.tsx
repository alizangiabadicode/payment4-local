import { t } from "i18next";
import { useTheme } from "next-themes";
import React from "react";
import useDarkMode from "use-dark-mode";

const DevelopersSection = () => {
  const { resolvedTheme: isDark } = useTheme();

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
