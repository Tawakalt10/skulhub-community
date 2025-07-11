import React, { type JSX } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | JSX.Element;
  styles?: string;
  position?: string;
  isLoading?: boolean;
  background?: string;
  shadow?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  styles,
  position = "text-center",
  background = "bg-[#1261B2]",
  shadow = "shadow-xl",
  width = "w-full",
  isLoading = false,
  disabled,
  ...rest
}) => {
  return (
    <div className={position}>
      <button
        className={`${background} ${width} rounded text-sm font-semibold leading-6 ${shadow} ${styles} ${
          disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading ? "Loading..." : text}
      </button>
    </div>
  );
};

export default Button;
