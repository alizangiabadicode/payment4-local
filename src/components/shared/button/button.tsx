"use client";
import * as React from "react";
import { Size } from "../types/size.type";
import { ButtonProps } from "./button.types";
import { useTranslation } from "react-i18next";

const sizeClasses: Record<Size, string> = {
  xs: "py-2 px-2",
  sm: "py-3 px-3",
  md: "py-4 px-4",
  lg: "py-5 px-5",
  xl: "py-6 px-6",
};

// const shapeClasses: Record<ButtonShape, string> = {
//   wide: "btn-wide",
//   full: "btn-block",
//   square: "btn-square",
//   default: "",
// };

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "md",
  isDisabled = false,
  isOutline = false,
  isLoading = false,
  loadingType = "spinner",
  loadingText,
  type = "button",
  children,
  className,
  ...rest
}: ButtonProps) => {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${sizeClasses[size]} ${className}
       dark:bg-[#9e6dff] bg-primary
       text-white hover:bg-[#552CA6] dark:hover:bg-[#864AFF] 
       rounded text-base font-normal
      `}
      {...rest}
    >
      {isLoading ? t("sending") : children}
    </button>
  );
};
