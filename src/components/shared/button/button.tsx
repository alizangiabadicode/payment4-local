"use client";
import * as React from "react";
import { Size } from "../types/size.type";
import classNames from "classnames";
import { ButtonProps, ButtonShape } from "./button.types";

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
  loadingText = "sending ...",
  type = "button",
  children,
  className,
  ...rest
}: ButtonProps) => {
  // const classes = classNames(
  //   "btn",
  //   className,
  //   { [`btn-${variant}`]: variant },
  //   { [`${sizeClasses[size]}`]: size },
  //   { "btn-outline": isOutline },
  //   { "btn-link": isLink },
  //   { [`${shapeClasses[shape]}`]: shape },
  //   { "animated-icon": animatedIcon },
  //   { "pointer-events-none opacity-80": isLoading }
  // );

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${sizeClasses[size]} ${className}
      bg-primary text-white hover:bg-primary-focus rounded text-base font-normal
      `}
      {...rest}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};
