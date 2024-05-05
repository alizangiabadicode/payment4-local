import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string; 
}

const Input: React.FC<InputProps> = ({ label, className, ...rest }) => {
  return (
    <div className="mb-2">
      {label && <label className="block mb-1">{label}</label>}
      <input
        {...rest}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;
