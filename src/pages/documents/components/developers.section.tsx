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
        For in-depth information about the Payment4 API, including endpoint
        details, request/response formats, error codes, and comprehensive
        examples, please refer to our Developer URL. This document provides
        technical guidance for integrating with Payment4 and can be found at
        Developers item in the menu.
      </p>
    </div>
  );
};

export default DevelopersSection;
