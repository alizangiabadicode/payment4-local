import React, { FC, ReactNode, useEffect, useRef } from "react";
import Logo from "../../../icons/svg/logo";
import { Button } from "../button";
import { useTranslation } from "react-i18next";
import { DarkCrossIcon, LightCrossIcon } from "../../../icons/svg";
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  const drawerRef = useRef<HTMLDivElement>(null);
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source } = queryParams;
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, onClose]);
  const handleSignupClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup?lang=${
      i18n.language
    }${utm_campaign ? `&utm_campaign=${utm_campaign}` : ""}${
      utm_medium ? `&utm_campaign=${utm_medium}` : ""
    }${utm_source ? `&utm_campaign=${utm_source}` : ""}`;
    window.open(redirectUrl, "_blank");
  };
  const handleLoginClick = () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signin?lang=${
      i18n.language
    }${utm_campaign ? `&utm_campaign=${utm_campaign}` : ""}${
      utm_medium ? `&utm_campaign=${utm_medium}` : ""
    }${utm_source ? `&utm_campaign=${utm_source}` : ""}`;
    window.open(redirectUrl, "_blank");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        ref={drawerRef}
        className={`fixed flex flex-col justify-between inset-y-0 ${
          direction === 'rtl' ? 'right-0' : 'left-0'
        } w-64 bg-gray-200 z-50 transform transition duration-300 dark:bg-black bg-white ${
          isOpen ? "translate-x-0" : direction === 'rtl' ? "translate-x-full" : "-translate-x-full"
        } ${className} lg:hidden`}
      >
        <div className="flex flex-col">
          <div className="p-4 flex justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <button
              onClick={onClose}
              className="text-gray-700 w-[24px] h-[24px]"
            >
              <DarkCrossIcon className="hidden dark:block" />
              <LightCrossIcon className="dark:hidden block" />
            </button>
          </div>
          <div className="py-4 px-4 flex flex-col gap-y-4">{children}</div>
        </div>
        <div className="px-4 mb-6 flex flex-col gap-y-[10px]">
          <Button
            onClick={handleLoginClick}
            variant="outlined"
            style={{ paddingTop: "6px", paddingBottom: "6px" }}
            className="w-full h-[44px] flex justify-center items-center"
          >
            <p className="w-full">{t("logIn")}</p>
          </Button>
          <Button
            onClick={handleSignupClick}
            className="w-full h-[44px] flex justify-center items-center"
          >
            <p className="w-full">{t("signup")}</p>
          </Button>
        </div>
      </div>
    </>
  );
};
