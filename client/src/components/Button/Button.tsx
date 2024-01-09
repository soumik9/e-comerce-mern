import React, { ButtonHTMLAttributes } from "react";
import CircleLoading from "../Icons/CircleLoading/CircleLoading";
import { cx } from "@/hooks/helper";

type Props = {
  isLoading?: boolean;
  uppercase?: boolean;
  text: string;
  width?: string;
  variant?: "contained" | "outlined";
  variantColor?: 'error' | 'warning';
  css?: string;
  loadingText?: string;
  type?: 'button' | 'submit' | 'reset';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type = 'submit', loadingText, isLoading, text, variant, variantColor, uppercase, css, startIcon, endIcon, width, ...props }: Props) => {
  return (
    <button
      type={type}
      className={cx(
        "trans duration-500 text-white py-3 bg-secondary hover:bg-primary-600 disabled:!bg-primary-300 disabled:!text-gray-300 rounded-lg lg:text-[18px] text-base outline-none",

        width ? width : 'px-5',

        variant === "outlined" && "!bg-transparent hover:!bg-secondary-600 hover:!text-white border-2 !border-secondary hover:!border-secondary-300 !text-secondary-700",

        (variantColor === 'error' && !variant?.length) && 'hover:!bg-error !bg-error-hover',

        (variantColor === 'warning' && variant === "outlined") && 'hover:!bg-warning hover:!text-white !border-warning !text-warning !outline-none',

        uppercase ? '!uppercase' : '!capitalize',

        (isLoading || startIcon) && '!text-white flex items-center justify-center',

        (startIcon && !isLoading) && 'gap-1.5',

        css
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <CircleLoading />}
      {(startIcon && !isLoading) && startIcon}
      {(loadingText && isLoading) ? loadingText : text}
    </button>
  );
};

export default Button;

