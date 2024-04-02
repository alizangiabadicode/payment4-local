import React from "react";
import useDarkMode from "use-dark-mode";

export const PluginsSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <p
      className={`text-base mt-3 mb-2 ${
        isDark
          ? "text-[#FFFFFFC7] opacity-[78%]"
          : "text-[#121212C7] opacity-[78%]"
      }`}
    >
      The plugins were created to address a challenge that we and several
      merchants were facing, which was a gateway that prioritizes customer
      privacy, has no external redirects, allows seamless integration, incurs no
      middleman fees, and we achieved it.
    </p>
  );
};
