import { useTranslation } from "react-i18next";
import { navbarItems } from "./navbar-items";
import Link from "next/link";
import Logo from "../../../icons/svg/logo";
import useCurrentRoute from "@/hooks/useCurrentRoute";
import useQueryParams from "@/hooks/useQueryParams";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@/icons/svg";

export const NavigationBar = () => {
  const currentRoute = useCurrentRoute();
  const { t, i18n } = useTranslation();
  const queryParams = useQueryParams();
  const { utm_campaign, utm_medium, utm_source } = queryParams;

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const currentOpenRef = openDropdown && dropdownRefs.current[openDropdown];
    if (currentOpenRef && !currentOpenRef.contains(event.target as Node)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <>
      <div className="flex gap-x-5 md:gap-0">
        <div className="lg:mx-4 mx-4 md:mx-2 w-[110px] h-[24px]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div
        className="hidden lg:flex md:gap-x-5 lg:gap-x-5 xl:gap-x-10 
      ltr:lg:ml-[30px] ltr:xl:ml-[200px] rtl:lg:mr-[100px] rtl:xl:mr-[200px]"
      >
        {navbarItems.map((item) => {
          const isActive = currentRoute === item.path;
          if (item.dropdownItems) {
            return (
              <div
                ref={(el) => {
                  dropdownRefs.current[item.title] = el;
                }}
                key={item.title}
                className="relative group"
              >
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className={`flex gap-x-2 items-center ${
                    isActive ? "font-bold" : ""
                  }
                  dark:text-white text-nowrap text-[13px] md:text-[15px]`}
                >
                  {t(`${item.title.toLowerCase()}`)}
                  <div className="dark:hidden">
                    <ChevronDownIcon color="#121212" />
                  </div>
                  <div className="hidden dark:block">
                    <ChevronDownIcon color="white" />
                  </div>
                </button>
                {openDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-[#18181A] z-10">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem) => {
                        const isActive = currentRoute === dropdownItem.path;

                        if (dropdownItem.path === "/blog") {
                          return (
                            <Link
                              key={dropdownItem.title}
                              target="_blank"
                              href={`https://${
                                i18n.language === "fa" ? "fa." : ""
                              }${process.env.NEXT_PUBLIC_BLOG_URL}`}
                              className={`${
                                isActive ? "font-bold" : ""
                              } dark:text-white text-nowrap text-[13px] md:text-[15px] px-4 py-2 `}
                            >
                              {t(dropdownItem.title.toLowerCase())}
                            </Link>
                          );
                        }
                        return (
                          <Link
                            key={dropdownItem.title}
                            onClick={() => setOpenDropdown(null)}
                            href={{
                              pathname: dropdownItem.path,
                              query: {
                                ...(utm_campaign && { utm_campaign }),
                                ...(utm_medium && { utm_medium }),
                                ...(utm_source && { utm_source }),
                              },
                            }}
                            className={`block px-4 py-2 text-sm  dark:text-white ${
                              isActive ? "font-bold" : ""
                            }`}
                          >
                            {t(dropdownItem.title.toLowerCase())}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.title}
              href={{
                pathname: item.path,
                query: {
                  ...(utm_campaign && { utm_campaign }),
                  ...(utm_medium && { utm_medium }),
                  ...(utm_source && { utm_source }),
                },
              }}
              className={`${isActive && "font-bold"}
              dark:text-white text-nowrap text-[13px] md:text-[15px]`}
            >
              {t(`${item.title.toLowerCase()}`)}
            </Link>
          );
        })}
      </div>
    </>
  );
};
