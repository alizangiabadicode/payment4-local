import React, { FC, ReactNode } from "react";
import useDarkMode from "use-dark-mode";

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
  const { value: isDark } = useDarkMode();
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-200 z-50 transform transition duration-300 ${
        isDark ? "bg-black" : "bg-[#ccc]"
      } ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${className} md:hidden`}
    >
      <div className="p-4">
        <button onClick={onClose} className="text-gray-700">
          &times;
        </button>
      </div>
      <div className="py-4 px-4 flex flex-col gap-y-4">{children}</div>
    </div>
  );
};
