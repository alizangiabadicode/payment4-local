"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export const LayoutProvider = ({ children }: { children: any }) => {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const currentPath = lng !== "en" ? `/${lng}/wp-plugin` : "/wp-plugin";

  return (
    <>
      {pathname !== currentPath ? <Header /> : null}
      {children}
      {pathname !== currentPath ? <Footer /> : null}
    </>
  );
};
