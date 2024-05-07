import React, { useState } from "react";
import { LeftArrowIcon, SearchIcon } from "../../../../public/images/svg";
import { useTranslation } from "react-i18next";

interface SearchProps {
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch?.(query);
  };

  return (
    <div className="flex items-center">
      <div className="relative w-full">
        <input
          type="text"
          placeholder={`${t("search")}...`}
          value={query}
          onChange={handleInputChange}
          className="px-4 py-2 rounded-[4px] focus:outline-none 
        focus:border-blue-500 w-full dark:bg-[#29292C] bg-[#1212120D]"
        />
        <div
          className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center p-3 bg-primary 
        rounded-[4px] cursor-pointer"
          onClick={handleSearch}
        >
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
