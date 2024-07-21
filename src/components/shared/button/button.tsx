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

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
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
  const baseStyles = `${sizeClasses[size]} rounded text-base font-normal`;
  const containedStyles =
    "dark:bg-[#9e6dff] bg-primary text-white hover:bg-[#552CA6] dark:hover:bg-[#864AFF]";
  const outlinedStyles =
    "bg-transparent border border-[#864AFF] dark:border-[#9E6DFF] text-[#864AFF] dark:text-[#9E6DFF] hover:bg-[#864AFF] hover:text-white hover:dark:text-white dark:hover:bg-[#864AFF]";

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${baseStyles} ${
        variant === "contained" ? containedStyles : outlinedStyles
      } ${className}`}
      {...rest}
    >
      {isLoading ? t("sending") : children}
    </button>
  );
};
