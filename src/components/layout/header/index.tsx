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
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: number]: boolean;
  }>({});
  const { t, i18n } = useTranslation();
  const direction = i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source, campaign_mode } = queryParams;

  const handleSignupClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${i18n.language}${
      utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
    }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
      utm_source ? `&utm_source=${utm_source}` : ""
    }${campaign_mode ? `&campaign_mode=${campaign_mode}` : ""}`;
    window.open(redirectUrl, "_blank");
  };
  const handleLoginClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signin?lang=${i18n.language}${
      utm_campaign ? `&utm_campaign=${utm_campaign}` : ""
    }${utm_medium ? `&utm_medium=${utm_medium}` : ""}${
      utm_source ? `&utm_source=${utm_source}` : ""
    }${campaign_mode ? `&campaign_mode=${campaign_mode}` : ""}`;
    window.open(redirectUrl, "_blank");
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <header style={{ direction: direction }}>
      <div className={`px-5 lg:px-5 sm:px-50 flex items-center justify-between my-4 `}>
        <NavigationBar />
        <div className="flex items-center lg:gap-x-4 gap-x-4 md:gap-x-2">
          <div className="flex gap-x-1 md:gap-x-0 lg:gap-x-2 md:min-w-[100px]">
            <div className="cursor-pointer">
              <ThemeSwitch />
            </div>
            <LanguageSelector />
          </div>
          <div className="hidden lg:flex gap-x-[10px]">
            <Button
              onClick={handleLoginClick}
              variant="outlined"
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
              className="px-1 sm:px-6 text-sm sm:text-base text-nowrap min-w-[100px]"
            >
              <p>{t("logIn")}</p>
            </Button>
            <Button
              onClick={handleSignupClick}
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
              className="px-1 sm:px-6 text-sm sm:text-base text-nowrap min-w-[100px]"
            >
              <p>{t("signup")}</p>
            </Button>
          </div>
          <div>
            <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
              {navbarItems.map((item, index) => {
                const isDropdownActive = item.dropdownItems
                  ? item.dropdownItems.some((dropdownItem) => currentRoute === dropdownItem.path)
                  : false;
                const isActive = currentRoute === item.path || isDropdownActive;
                const hasDropdownItems = item.dropdownItems && item.dropdownItems.length > 0;
                return (
                  <>
                    <div className="flex justify-between">
                      <Link
                        key={item.title}
                        style={{ fontSize: "15px" }}
                        className={`${isActive && "font-bold"}
                    dark:text-white
                  }`}
                        href={{
                          pathname: item.path,
                          query: {
                            ...(utm_campaign && { utm_campaign }),
                            ...(utm_medium && { utm_medium }),
                            ...(utm_source && { utm_source }),
                          },
                        }}
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {t(`${item.title.toLowerCase()}`)}
                      </Link>
                      {hasDropdownItems && (
                        <div onClick={() => toggleDropdown(index)} className="cursor-pointer">
                          {openDropdowns[index] ? "-" : "+"}
                        </div>
                      )}
                    </div>
                    {openDropdowns[index] && hasDropdownItems && (
                      <div className="rtl:pr-10 ltr:pl-10 flex flex-col gap-y-5">
                        {item.dropdownItems?.map((dropDownItem, dropDownIndex) => {
                          const isActive = currentRoute === dropDownItem.path;
                          if (dropDownItem.path === "/blog") {
                            return (
                              <Link
                                key={item.title}
                                style={{ fontSize: "15px" }}
                                className={`${isActive && "font-bold"}
                              dark:text-white
                            }`}
                                target="_blank"
                                href={`https://${i18n.language === "fa" ? "fa." : ""}${
                                  process.env.NEXT_PUBLIC_BLOG_URL
                                }`}
                                onClick={() => setIsDrawerOpen(false)}
                              >
                                {t(`${dropDownItem.title.toLowerCase()}`)}
                              </Link>
                            );
                          }
                          return (
                            <div key={dropDownIndex}>
                              <Link
                                onClick={() => {
                                  setIsDrawerOpen(false);
                                  setOpenDropdowns({});
                                }}
                                href={dropDownItem.path}
                                className={`${isActive && "font-bold"}
                              dark:text-white
                            }`}
                              >
                                {t(`${dropDownItem.title.toLowerCase()}`)}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                );
              })}
            </Drawer>
            <div
              onClick={() => setIsDrawerOpen(true)}
              className="shadow-custom-light dark:shadow-none bg-white dark:bg-[#272727] lg:hidden cursor-pointer w-[40px] h-[40px] flex justify-center items-center rounded-[4px]"
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
