"use client";
import React, { useState } from "react";
import { CloseCollapse, OpenCollapse } from "../../../icons/svg";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-[#1212120A] dark:bg-[#121215] border
        
          dark:border-[#FFFFFF14] 
        border-[#1212120A] rounded-md mb-4 `}
    >
      <div
        className="flex items-center justify-between px-4 py-2 bg-gray-200 cursor-pointer"
        onClick={toggleCollapse}
      >
        <p className={`text-[16px] dark:text-white text-[#121212]`}>
          {question}
        </p>
        <div>
          {isOpen ? (
            <CloseCollapse className="dark:fill-[#FFFFFF] fill-[#121212]" />
          ) : (
            <OpenCollapse className="dark:fill-[#FFFFFF] fill-[#121212]" />
          )}
        </div>
      </div>
      {isOpen && (
        <div>
          <hr
            className={`border-t 
                dark:border-[#FFFFFF14] 
                border-[#1212120A]`}
          />
        </div>
      )}
      {isOpen && (
        <div className="p-4">
          <p
            className={`text-[14px]               
                dark:text-[#FFFFFFA1] 
              text-[#121212A1] 
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
