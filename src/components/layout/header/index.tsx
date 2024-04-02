import React, { useState } from "react";
import Logo from "../../../images/svg/logo";
import { navbarItems } from "./navbar-items";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Button } from "../../shared/button";
import LightModeIcon from "../../../images/svg/light-mode-icon";
import { Drawer } from "../../shared";
import { MenuItemIcon } from "../../../images/svg/menu-item";
import useDarkMode from "use-dark-mode";
import { DarkModeIcon, LanguageDarkIcon } from "../../../images/svg";
import LanguageLightIcon from "../../../images/svg/language-light-icon";

const Header = () => {
  const { pathname } = useLocation();
  const currentUrl = pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { toggle, value: isDark } = useDarkMode();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header className={`${isDark ? "bg-[#0B0B0E]" : "bg-white"}`}>
      <div
        className={`container px-5 sm:px-50 flex items-center justify-between my-4 `}
      >
        <div className="flex gap-x-5 md:gap-0">
          <div>
            <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
              hello
            </Drawer>
            <div className="md:hidden cursor-pointer">
              <MenuItemIcon color="#0B0B0E" />
            </div>
          </div>
          <div style={{ width: "110px", height: "24px" }}>
            <Logo />
          </div>
        </div>
        <div className="hidden md:gap-x-5 lg:gap-x-10 md:flex">
          {navbarItems.map((item) => {
            const isActive = currentUrl === item.path;
            return (
              <Link
                style={{ fontSize: "15px" }}
                className={`${isActive && "font-bold"} ${
                  isDark && "text-white"
                }`}
                to={item.path}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-x-4">
          <div className="flex gap-x-2">
            <div onClick={toggle} className="cursor-pointer">
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </div>

            {isDark ? <LanguageDarkIcon /> : <LanguageLightIcon />}
          </div>
          <div>
            <Button
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
              className="px-1 sm:px-6 text-sm sm:text-base"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
