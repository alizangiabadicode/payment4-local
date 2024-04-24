import React, { FC, ReactNode } from "react";
import Logo from "../../../../public/images/svg/logo";
import { Button } from "../button";
import { useTranslation } from "react-i18next";
import { DarkCrossIcon, LightCrossIcon } from "../../../../public/images/svg";

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
  const { t } = useTranslation();
  return (
    <div
      className={`fixed flex flex-col justify-between inset-y-0 left-0 w-64 bg-gray-200 z-50 transform transition duration-300
         dark:bg-black bg-[#ccc] ${
           isOpen ? "translate-x-0" : "-translate-x-full"
         } ${className} md:hidden`}
    >
      <div className="flex flex-col">
        <div className="p-4 flex justify-between">
          <div>
            <Logo />
          </div>
          <button onClick={onClose} className="text-gray-700 w-[24px] h-[24px]">
            <DarkCrossIcon className="hidden dark:block" />
            <LightCrossIcon className="dark:hidden block" />
          </button>
        </div>
        <div className="py-4 px-4 flex flex-col gap-y-4">{children}</div>
      </div>
      <div className="px-4 mb-6">
        <Button className="w-full h-[44px] flex justify-center items-center">
          <a target="_blank" href={process.env.REACT_SIGHNUP_URL}>
            {t("signup")}
          </a>
        </Button>
      </div>
    </div>
  );
};
