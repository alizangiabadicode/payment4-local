import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import useDarkMode from "use-dark-mode";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  // const [theme] = useDarkSide();
  const { value: isDark } = useDarkMode();

  return (
    <div
      className={`min-h-screen grid grid-rows-80px-1fr-auto ${
        isDark ? "bg-[#0B0B0E]" : "bg-white"
      }`}
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
