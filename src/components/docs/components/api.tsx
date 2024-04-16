import { t } from "i18next";
import { useTheme } from "next-themes";
import React from "react";
import useDarkMode from "use-dark-mode";

const ApiSection = () => {
  const { resolvedTheme: isDark } = useTheme();

  return (
    <div>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("apiDoc")}
      </p>
    </div>
  );
};

export default ApiSection;
