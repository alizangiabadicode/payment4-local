"use client";
import { Drawer } from "@/components/shared";
import { navbarItems } from "./navbar-items";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItemIcon } from "../../../../public/images/svg/menu-item";
import Logo from "../../../../public/images/svg/logo";
import { t } from "i18next";
import { useTheme } from "next-themes";

export const NavigationBar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { resolvedTheme: isDark } = useTheme();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
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
            <MenuItemIcon color={isDark ? "white" : "#0B0B0E"} />
          </div>
        </div>
        <div style={{ width: "110px", height: "24px" }}>
          <Logo />
        </div>
      </div>
      <div className="hidden md:gap-x-5 lg:gap-x-10 md:flex">
        {navbarItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.title}
              style={{ fontSize: "15px" }}
              className={`${isActive && "font-bold"} dark:text-white`}
              href={item.path}
            >
              {t(`${item.title.toLowerCase()}`)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
