import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, className, ...rest }) => {
  return (
    <div className="mb-2">
      {label && <label className="block mb-1">{label}</label>}
      <textarea
        {...rest}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${className}`}
      />
    </div>
  );
};

export default TextArea;
