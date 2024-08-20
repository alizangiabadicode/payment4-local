import React, { useEffect } from "react";
import { DarkCrossIcon } from "../../../icons/svg";

type Variant = "success" | "warning";
interface SnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  autoCloseDelay?: number;
  variant?: Variant;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  isOpen,
  onClose,
  autoCloseDelay = 3000,
  variant = "success",
}) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen) {
      timeoutId = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, onClose, autoCloseDelay]);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 ltr:right-0 rtl:left-0 flex items-end 
        justify-center px-4 py-6 
        pointer-events-none sm:p-6 sm:items-start sm:justify-end">
          <div
            className={`max-w-sm w-full ${
              variant === "success" ? "bg-[#378C3B]" : "bg-[#F67C01]"
            }  shadow-lg rounded-lg pointer-events-auto`}
          >
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="mx-3 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-white">
                      {message}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      onClick={onClose}
                      className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                      <DarkCrossIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
