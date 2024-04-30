import React, { useRef } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

interface CodeBoxProps {
  code: string;
  style?: React.CSSProperties;
}

export const CodeBox: React.FC<CodeBoxProps> = ({ code, style }) => {
  const { resolvedTheme: theme } = useTheme();
  const { i18n } = useTranslation();
  const codeRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCopy = () => {
    if (codeRef.current) {
      codeRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div
      className="code-box"
      style={{ marginLeft: i18n.dir() === "rtl" ? "auto" : 0 , direction:'ltr' }}
    >
      <textarea
        ref={codeRef}
        className="code"
        readOnly
        value={code}
        style={{ ...style }}
      />
      <button
        className="mt-[5px] cursor-pointer text-white"
        onClick={handleCopy}
      >
        copy
      </button>
    </div>
  );
};
