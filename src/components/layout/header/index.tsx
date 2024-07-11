"use client";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Button } from "../../shared/button";
import LanguageSelector from "../../shared/select.language/select.language";
import ThemeSwitch from "@/components/shared/theme.swicher/theme.swicher";
import { NavigationBar } from "./navigation";
import { Drawer } from "@/components/shared";
import { navbarItems } from "./navbar-items";
import { MenuItemIcon } from "../../../icons/svg/menu-item";
import useCurrentRoute from "@/hooks/useCurrentRoute";
import useQueryParams from "@/hooks/useQueryParams";
import Link from "next/link";

const Header = () => {
  const currentRoute = useCurrentRoute();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source } = queryParams;
  return (
    <header style={{ direction: direction }}>
      <div
        className={`px-5 md:px-0 lg:px-5 sm:px-50 flex items-center justify-between my-4 `}
      >
        <NavigationBar />
        <div className="flex items-center lg:gap-x-4 gap-x-4 md:gap-x-2">
          <div className="flex gap-x-1 md:gap-x-0 lg:gap-x-2">
            <div className="cursor-pointer">
              <ThemeSwitch />
            </div>
            <LanguageSelector />
          </div>
          <div className="hidden md:block">
            <Button
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
              className="px-1 sm:px-6 text-sm sm:text-base text-nowrap"
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${
                  i18n.language
                }${utm_campaign ? `&utm_campaign=${utm_campaign}` : ""}${
                  utm_medium ? `&utm_campaign=${utm_medium}` : ""
                }${utm_source ? `&utm_campaign=${utm_source}` : ""}`}
                target="_blank"
              >
                {t("signup")}
              </Link>
            </Button>
          </div>
          <div>
            <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
              {navbarItems.map((item) => {
                const isActive = currentRoute === item.path;
                return (
                  <Link
                    key={item.title}
                    style={{ fontSize: "15px" }}
                    className={`${isActive && "font-bold"}
                    dark:text-white
                  }`}
                    href={{
                      pathname: item.path,
                      query: { utm_campaign, utm_medium, utm_source },
                    }}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t(`${item.title.toLowerCase()}`)}
                  </Link>
                );
              })}
            </Drawer>
            <div
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden cursor-pointer"
            >
              <MenuItemIcon className="dark:hidden block" color={"#0B0B0E"} />
              <MenuItemIcon className="hidden dark:block" color={"white"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
