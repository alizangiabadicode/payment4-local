import React, { useEffect, useRef, useState } from "react";
import "../components/create.payment/code.css";
import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "next-themes";
import { Snackbar } from "@/components/shared";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/shared/button";

const ShowPaymentApiTabs = ({ code }: { code: string }) => {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);
  const { resolvedTheme } = useTheme();
  const codeRefs = useRef<HTMLPreElement | null>(null);
  const handleCopyClick = (ref: React.RefObject<HTMLPreElement>) => {
    const codeElement = ref.current;
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || "");
      setIsOpenSnackBar(true);
    }
  };
  useEffect(() => setMounted(true), []);
  return (
    <div
      className={`pb-4 rounded-lg 
        dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
    >
      <Snackbar
        isOpen={isOpenSnackBar}
        message={t("toast.successCopy")}
        onClose={() => setIsOpenSnackBar(false)}
        variant="success"
      />
      <Highlight
        theme={
          resolvedTheme === "dark" && mounted ? themes.oneDark : themes.oneLight
        }
        language="javascript"
        code={code}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} py-[10px] ml-[30px] overflow-x-auto !bg-transparent`}
            style={{ ...style, direction: "ltr" }}
            ref={codeRefs}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })}></span>
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <Button
        className="absolute top-1 right-2 px-3 py-[5px] bg-gray-300 text-gray-700 rounded-md text-sm"
        onClick={() => handleCopyClick(codeRefs)}
      >
        Copy
      </Button>
    </div>
  );
};

export default ShowPaymentApiTabs;
