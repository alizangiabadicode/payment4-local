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
        To utilize the Payment4 web gateway and API services, merchants are
        required to create an API key. This key serves as the bridge between
        their systems and Payment4's services.
      </p>
    </div>
  );
};

export default ApiKeySection;
