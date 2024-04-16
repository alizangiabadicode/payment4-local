import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";
import useDarkMode from "use-dark-mode";

const Introduction = () => {
  const { resolvedTheme: isDark } = useTheme();
  const { t } = useTranslation();
  return (
    <div>
      <p
        className={`text-[16px] leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t('docIntro')}
      </p>
    </div>
  );
};

export default Introduction;
