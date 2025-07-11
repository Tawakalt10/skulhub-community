import React, { type ReactNode, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  addLeft?: ReactNode;
  addRight?: ReactNode;
  label?: string;
  error?: string | boolean;
  helperText?: string;
  color?: string;
  labelStyle?: string;
}

const InputField: React.FC<Props> = ({
  addLeft,
  addRight,
  type = "text",
  label,
  error = "",
  helperText = "",
  color = "text-[#F5F5F5]",
  labelStyle,
  ...rest
}) => {
  const [show, setShow] = useState(false);

  const inputType =
    type === "password" ? (show ? "text" : "password") : type;

  return (
    <div className="w-full">
      {label && (
        <label className={`block text-sm font-normal ${color} ${labelStyle} mb-1`}>
          {label}
        </label>
      )}

      <div className="relative w-full">
        {addLeft && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {addLeft}
          </div>
        )}

        <input
          type={inputType}
          className={`w-full ${
            !!error ? "border-red-500" : "border-gray-300"
          } border rounded py-2 px-3 pl-${addLeft ? "10" : "3"} pr-${
            addRight || type === "password" ? "10" : "3"
          } text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...rest}
        />

        {addRight && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {addRight}
          </div>
        )}

        {type === "password" && (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? "🙈" : "👁️"}
          </div>
        )}
      </div>

      {error ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : helperText ? (
        <p className="text-gray-500 text-sm mt-1">{helperText}</p>
      ) : null}
    </div>
  );
};

export default InputField;
