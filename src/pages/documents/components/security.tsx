import { t } from "i18next";
import React from "react";
import useDarkMode from "use-dark-mode";

const SecuritySection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } mt-2`}
      >
        {t("security")}
      </p>
    </div>
  );
};

export default SecuritySection;
