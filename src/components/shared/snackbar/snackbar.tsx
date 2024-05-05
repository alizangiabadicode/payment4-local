import React, { useEffect } from "react";
import { DarkCrossIcon, LightCrossIcon } from "../../../../public/images/svg";

interface SnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  autoCloseDelay?: number;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  isOpen,
  onClose,
  autoCloseDelay = 3000,
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
        <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
          <div className="max-w-sm w-full bg-[#378C3B] shadow-lg rounded-lg pointer-events-auto">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      {message}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      onClick={onClose}
                      className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                      <DarkCrossIcon className="hidden dark:block" />
                      <LightCrossIcon className="dark:hidden block" />
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
