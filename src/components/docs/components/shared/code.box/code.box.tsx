import React, { useRef, useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/shared/button";
import { Snackbar } from "@/components/shared";

interface CodeBoxProps {
  code: string;
  style?: React.CSSProperties;
}

export const CodeBox: React.FC<CodeBoxProps> = ({ code, style }) => {
  const { t, i18n } = useTranslation();
  const codeRef = useRef<HTMLTextAreaElement | null>(null);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);

  const handleCopy = () => {
    const codeElement = codeRef.current;
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || "");
      setIsOpenSnackBar(true);
    }
  };

  return (
    <>
      <Snackbar
        isOpen={isOpenSnackBar}
        message={t("toast.successCopy")}
        onClose={() => setIsOpenSnackBar(false)}
        variant="success"
      />
      <div
        className="code-box relative"
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
        <Button
          className="mt-[5px] cursor-pointer text-white absolute top-1 right-10 !py-[2px]"
          onClick={handleCopy}
        >
          copy
        </Button>
      </div>
    </>
  );
};
