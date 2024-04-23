"use client";

import { useTranslation } from "react-i18next";
import { Drawer } from "@/components/shared";
import { navbarItems } from "./navbar-items";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItemIcon } from "../../../../public/images/svg/menu-item";
import Logo from "../../../../public/images/svg/logo";
import { useTheme } from "next-themes";

export const NavigationBar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { resolvedTheme: isDark } = useTheme();
  const { t } = useTranslation();
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="flex gap-x-5 md:gap-0">
        <div>
          <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
            {navbarItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.title}
                  style={{ fontSize: "15px" }}
                  className={`${isActive && "font-bold"}
                    dark:text-white
                  }`}
                  href={item.path}
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
        <div style={{ width: "110px", height: "24px" }}>
          <Logo />
        </div>
      </div>
      <div className="hidden md:flex md:gap-x-5 lg:gap-x-10">
        {navbarItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.title}
              style={{ fontSize: "15px" }}
              href={item.path}
            >
              {t(`${item.title.toLowerCase()}`)}
            </Link>
          );
        })}
      </div>
    </>
  );
};
