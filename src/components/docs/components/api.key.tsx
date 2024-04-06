import { t } from "i18next";
import React from "react";
import useDarkMode from "use-dark-mode";

const ApiKeySection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        {t("apiKey")}
      </p>
    </div>
  );
};

export default ApiKeySection;
