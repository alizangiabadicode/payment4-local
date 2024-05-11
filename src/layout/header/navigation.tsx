"use client";

import { useTranslation } from "react-i18next";
import { navbarItems } from "./navbar-items";
import Link from "next/link";
import Logo from "../../icons/svg/logo";
import useCurrentRoute from "@/hooks/useCurrentRoute";

export const NavigationBar = () => {
  const currentRoute = useCurrentRoute();
  const { t } = useTranslation();

  return (
    <>
      <div className="flex gap-x-5 md:gap-0">
        <div className="lg:mx-4 mx-4 md:mx-2 w-[110px] h-[24px]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex md:gap-x-5 lg:gap-x-10">
        {navbarItems.map((item) => {
          const isActive = currentRoute === item.path;
          return (
            <Link
              key={item.title}
              href={item.path}
              className={`${isActive && "font-bold"}
              dark:text-white text-nowrap text-[13px] md:text-[15px]`}
            >
              {t(`${item.title.toLowerCase()}`)}
            </Link>
          );
        })}
      </div>
    </>
  );
};
