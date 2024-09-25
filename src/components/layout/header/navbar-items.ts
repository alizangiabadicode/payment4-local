interface navbarItemsTypes {
  title: string;
  path?: string;
  dropdownItems?: { title: string; path: string }[];
}
export const navbarItems: navbarItemsTypes[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Product",
    dropdownItems: [
      { title: "Cooperation", path: "/cooperation" },
      { title: "Plugin", path: "/plugin" },
      { title: "Documents", path: "/documents" },
    ],
  },
  {
    title: "Company",
    dropdownItems: [
      {
        title: "faq",
        path: "/faq",
      },
      {
        title: "Blog",
        path: "/blog",
      },
      {
        title: "About",
        path: "/about-us",
      },
    ],
  },
  {
    title: "Contact us",
    path: "/contact-us",
  },
];
