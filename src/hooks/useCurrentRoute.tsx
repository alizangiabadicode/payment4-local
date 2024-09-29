import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const useCurrentRoute = () => {
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const getCurrentRoute = () => {
    if (i18n.language !== "en") {
      switch (pathname) {
        case `/${i18n.language}`:
          return "/";
        case `/${i18n.language}/documents`:
          return "/documents";
        case `/${i18n.language}/about-us`:
          return "/about-us";
        case `/${i18n.language}/contact-us`:
          return "/contact-us";
        case `/${i18n.language}/faq`:
          return "/faq";
        case `/${i18n.language}/blog`:
          return "/blog";
        case `/${i18n.language}/cooperation`:
          return "/cooperation";
        case `/${i18n.language}/plugin`:
          return "/plugin";
        default:
          return pathname;
      }
    }
    return pathname;
  };

  return getCurrentRoute();
};

export default useCurrentRoute;
