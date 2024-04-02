import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import useDarkMode from "use-dark-mode";

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
  );
};

export default Layout;
