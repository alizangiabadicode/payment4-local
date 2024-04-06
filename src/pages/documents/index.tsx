import React, { useEffect, useState } from "react";
import { DocArrayInterface, docArray } from "../../arrays/data.array";
import { CloseCollapse, OpenCollapse } from "../../images/svg";
import useDarkMode from "use-dark-mode";
import { useLocation } from "@reach/router";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const DocumentPageLayout: React.FC = () => {
  const direction = i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  const [selectedSection, setSelectedSection] = useState<string>("");
  const { value: isDark } = useDarkMode();
  const location = useLocation();

  const [collapsedItems, setCollapsedItems] = useState<string[]>(
    docArray.filter((item) => item.subItems).map((item) => item.title)
  );

  const handleCollapseToggle = (itemLabel: string) => {
    setCollapsedItems((prevCollapsedItems) =>
      prevCollapsedItems.includes(itemLabel)
        ? prevCollapsedItems.filter((label) => label !== itemLabel)
        : [...prevCollapsedItems, itemLabel]
    );
  };

  const isCollapsed = (itemLabel: string) => {
    return collapsedItems.includes(itemLabel);
  };

  const scrollToSection = (sectionId: string) => {
    window.location.hash = `#${sectionId}`;
    setSelectedSection(sectionId);
  };

  useEffect(() => {
    const hash = location.hash;
    const hashParts = hash.substring(1).split("#");
    if (hashParts.length === 1) {
      const sectionId = hashParts[0];
      scrollToSection(sectionId);
    } else if (hashParts.length === 0) {
      const subSectionId = hashParts[0];
      scrollToSection(subSectionId);
    }
    const sectionId = hash.substring(1);
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div style={{ direction }} className="container flex md:gap-[69px]">
      {/* Sidebar */}
      <div
        className={`hidden md:block md:w-1/4 ${
          isDark ? "bg-[#FFFFFF08]" : "bg-[#12121208]"
        } h-max p-[26px] rounded-[8px] sticky top-0`}
      >
        {docArray.map((item) => (
          <ul>
            <li key={item.id} className="mb-4">
              <div
                className="flex items-center cursor-pointer justify-between"
                onClick={() => scrollToSection(item.id)}
              >
                <p className={`${isDark ? "text-white" : "text-[#121212]"}`}>
                  {item.title}
                </p>
                {item.subItems && (
                  <button onClick={() => handleCollapseToggle(item.title)}>
                    {isCollapsed(item.title) ? (
                      <OpenCollapse />
                    ) : (
                      <CloseCollapse />
                    )}
                  </button>
                )}
              </div>
              {item.subItems && !isCollapsed(item.title) && (
                <ul className="flex flex-col gap-3 my-[10px] ml-[15px]">
                  {item.subItems.map((subItem) => (
                    <li
                      onClick={() => scrollToSection(subItem.id)}
                      key={subItem.id}
                      className="cursor-pointer"
                    >
                      <p
                        className={`${
                          isDark ? "text-white" : "text-[#121212]"
                        }`}
                      >
                        {subItem.title}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        ))}
      </div>
      {/* Content Section */}
      <div className="w-full md:w-3/4 p-4">
        {docArray.map((item) => (
          <div id={item.id} className="p-4">
            <p
              className={`${
                isDark ? "text-white" : "text-black"
              } md:text-[20px] font-semibold`}
            >
              {item.title}
            </p>
            {item.content}
            {item.subItems &&
              item.subItems.map((subItem) => (
                <div id={subItem.id} key={subItem.id} className="my-5">
                  <p
                    className={`${
                      isDark ? "text-white" : "text-black"
                    } md:text-[18px] font-semibold`}
                  >
                    {subItem.title}
                  </p>
                  <p>{subItem.content}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentPageLayout;
