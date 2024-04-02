import React from "react";
import useDarkMode from "use-dark-mode";

export const WHMCSSection = () => {
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
        This plugin is a powerful integration that extends the capabilities of
        WHMCS to seamlessly handle cryptocurrency transactions, providing a
        secure and efficient payment gateway for your web hosting and services.{" "}
        <a
          href={process.env.REACT_APP_WHMCS_PLUGIN_URL}
          className="text-blue-600"
        >
          Here is the download link.
        </a>
      </p>
    </div>
  );
};
