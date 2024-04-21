"use client";

import React, { useEffect, useState } from "react";
import { CloseCollapse, OpenCollapse } from "../../../../public/images/svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import {
  ApiKeySection,
  ApiSection,
  ContactUsSection,
  CreatePayment,
  DevelopersSection,
  Introduction,
  LaravelSDKSection,
  NodeSDKSection,
  PluginsSection,
  SDKSection,
  SecuritySection,
  Settlements,
  SystemLimits,
  TransactionSection,
  VerifyPayment,
  WHMCSSection,
  WoocommerceSection,
} from "@/components/docs";

interface SubItem {
  id: string;
  title: string;
  content?: React.ReactNode;
}
export interface DocArrayInterface {
  id: string;
  title: string;
  content?: React.ReactNode;
  subItems?: SubItem[];
}
const DocumentPageLayout: React.FC = () => {
  const { t, i18n } = useTranslation();

  const docArray: DocArrayInterface[] = [
    {
      id: "Introduction",
      title: t("introduction"),
      content: <Introduction />,
    },
    {
      id: "Transaction",
      title: t("transaction"),
      content: <TransactionSection />,
    },
    {
      id: "Settlements",
      title: t("settlementsTitle"),
      content: <Settlements />,
    },
    {
      id: "SystemLimits",
      title: t("systemLimits"),
      content: <SystemLimits />,
    },
    {
      id: "ApiKey",
      title: t("apiKeyTitle"),
      content: <ApiKeySection />,
    },
    {
      id: "Security",
      title: t("authenticationAndSecurity"),
      content: <SecuritySection />,
    },
    {
      id: "Api",
      title: "Api",
      content: <ApiSection />,
      subItems: [
        {
          id: "createPayment",
          title: t("createPayment"),
          content: <CreatePayment />,
        },
        {
          id: "verifyPayment",
          title: t("verifyPayment"),
          content: <VerifyPayment />,
        },
      ],
    },
    {
      id: "SDK",
      title: "SDKS",
      content: <SDKSection />,
      subItems: [
        {
          id: "NodeSDK",
          title: t("nodeSDK"),
          content: <NodeSDKSection />,
        },
        {
          id: "LaravelSDK",
          title: t("laravelSDK"),
          content: <LaravelSDKSection />,
        },
      ],
    },
    {
      id: "Plugins",
      title: t("plugins"),
      content: <PluginsSection />,
      subItems: [
        {
          id: "Woocommerce",
          title: "Woocommerce",
          content: <WoocommerceSection />,
        },
        {
          id: "WHMCS",
          title: "WHMCS",
          content: <WHMCSSection />,
        },
      ],
    },
    {
      id: "Developers",
      title: t("developers"),
      content: <DevelopersSection />,
    },
    {
      id: "Contact",
      title: t("contact us"),
      content: <ContactUsSection />,
    },
  ];

  const direction =
    i18n.dir() === "rtl" || i18n.language === "ar" ? "rtl" : "ltr";
  const [selectedSection, setSelectedSection] = useState<string>("");
  const { resolvedTheme: isDark } = useTheme();

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
          isDark === "dark" ? "bg-[#FFFFFF08]" : "bg-[#12121208]"
        } h-max p-[26px] rounded-[8px] sticky top-0`}
      >
        {docArray.map((item) => (
          <ul key={item.id}>
            <li key={item.id} className="mb-4">
              <div
                onClick={() => scrollToSection(item.id)}
                className="mb-4 flex items-center cursor-pointer justify-between"
              >
                <p
                  className={`${
                    isDark === "dark" ? "text-white" : "text-[#121212]"
                  }`}
                >
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
                          isDark === "dark" ? "text-white" : "text-[#121212]"
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
          <div key={item.id} id={item.id} className="p-4">
            <p
              className={`${
                isDark === "dark" ? "text-white" : "text-black"
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
                      isDark === "dark" ? "text-white" : "text-black"
                    } md:text-[18px] font-semibold`}
                  >
                    {subItem.title}
                  </p>
                  {subItem.content}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentPageLayout;
