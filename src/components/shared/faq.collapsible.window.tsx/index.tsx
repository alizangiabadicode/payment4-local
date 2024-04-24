"use client";
import React, { useState } from "react";
import { CloseCollapse, OpenCollapse } from "../../../../public/images/svg";
import { useTheme } from "next-themes";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const { resolvedTheme: isDark } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-[#1212120A] border ${
        isDark
          ? "border-[#FFFFFF14] border-opacity-[8%]"
          : "border-[#1212120A] border-opacity-[4%]"
      }  rounded-md mb-4 `}
    >
      <div
        className="flex items-center justify-between px-4 py-2 bg-gray-200 cursor-pointer"
        onClick={toggleCollapse}
      >
        <p className={`text-[16px] ${isDark ? "text-white" : "text-black"}`}>
          {question}
        </p>
        {isOpen ? <CloseCollapse /> : <OpenCollapse />}
      </div>
      {isOpen && (
        <div>
          <hr
            className={`border-t ${
              isDark
                ? "border-[#FFFFFF14] border-opacity-[8%]"
                : "border-[#1212120A] border-opacity-[3%]"
            }`}
          />
        </div>
      )}
      {isOpen && (
        <div className="p-4">
          <p
            className={`text-[14px] ${
              isDark
                ? "text-[#FFFFFFA1] text-opacity-[63%]"
                : "text-[#121212A1] text-opacity-[63%]"
            } `}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
