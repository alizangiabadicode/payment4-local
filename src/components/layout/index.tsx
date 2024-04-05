import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import useDarkMode from "use-dark-mode";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { value: isDark } = useDarkMode();
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    const html = document.querySelector("html");
    if (isDarkMode === "true") {
      html?.style.setProperty("--background-color", "#0B0B0E");
    } else {
      html?.style.setProperty("--background-color", "#FFFFFF");
    }
  }, [isDark]);
  return (
    <I18nextProvider i18n={i18n}>
      <div
        className={` min-h-screen grid grid-rows-80px-1fr-auto ${
          isDark ? "bg-[#0B0B0E]" : "bg-white"
        }`}
      >
        <Header />
        <div className={`${isDark ? "bg-[#0B0B0E]" : "bg-white"}`}>
          {children}
        </div>
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default Layout;
