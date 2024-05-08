import React, { useRef } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

interface CodeBoxProps {
  code: string;
  style?: React.CSSProperties;
}

export const CodeBox: React.FC<CodeBoxProps> = ({ code, style }) => {
  const { i18n } = useTranslation();
  const codeRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCopy = () => {
    const codeElement = codeRef.current;
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || "");
    }
  };

  return (
    <div
      className="code-box"
      style={{
        marginLeft: i18n.dir() === "rtl" ? "auto" : 0,
        direction: "ltr",
      }}
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
