"use client";

import { useTranslation } from "react-i18next";
import { navbarItems } from "./navbar-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../../../public/images/svg/logo";

export const NavigationBar = () => {
  const pathname = usePathname();
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-x-5 md:gap-0">
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
              className={`${isActive && "font-bold"}
              dark:text-white`}
            >
              {t(`${item.title.toLowerCase()}`)}
            </Link>
          );
        })}
      </div>
    </>
  );
};
