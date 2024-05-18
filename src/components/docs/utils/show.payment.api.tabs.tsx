import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
require("prismjs/components/prism-javascript");
import "../components/create.payment/code.css";

const ShowPaymentApiTabs = ({ code }: {code:string }) => {
  const codeRefs = useRef<HTMLPreElement | null>(null)
  const handleCopyClick = (ref: React.RefObject<HTMLPreElement>) => {
    const codeElement = ref.current;
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || "");
    }
  };
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
    <div
      className={`pb-4 rounded-lg 
        dark:bg-[#FFFFFF08] bg-[#f6f8fa] relative`}
    >
      <pre
        className="ml-5 overflow-x-auto !bg-transparent"
        style={{ direction: "ltr" }}
      >
        <code
          ref={codeRefs}
          className="dark:text-white text-black language-javascript"
          style={{ textShadow: "none" }}
        >
          {code}
        </code>
      </pre>
      <button
        className="absolute top-2 right-2 px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm"
        onClick={() => handleCopyClick(codeRefs)}
      >
        Copy
      </button>
    </div>
  );
};

export default ShowPaymentApiTabs;
