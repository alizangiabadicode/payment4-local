import React from "react";
import useDarkMode from "use-dark-mode";
export const SDKSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="p-4">
      <h2
        className={`text-2xl font-semibold ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Overview
      </h2>
      <p
        className={`text-base font-normal mt-4 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        These SDKs provide a set of tools and libraries to facilitate the
        integration of Payment4's crypto gateway into various applications and
        platforms. Whether you're developing a website, mobile app, or a backend
        system, These SDKs aim to simplify the process of accepting and managing
        cryptocurrency transactions.
      </p>
    </div>
  );
};
