import React, { FC, ReactNode } from "react";

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
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-200 z-50 transform transition duration-300 bg-primary ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${className} md:hidden`}
    >
      <div className="p-4">
        <button onClick={onClose} className="text-gray-700">
          &times;
        </button>
      </div>
      <div className="py-4 px-2">{children}</div>
    </div>
  );
};
