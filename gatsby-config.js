const config = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `fi`, `es`, `de`, `sv`, `fr`],
        defaultLanguage: `en`,
        redirect: false,
        siteUrl: "https://nyxo.app",
        // i18nextOptions: {
        //   lowerCaseLng: true,
        //   saveMissing: false,
        //   interpolation: {
        //     escapeValue: false,
        //   },
        //   keySeparator: ".",
        //   nsSeparator: false,
        // },
        // pages: [
        //   {
        //     matchPath: "/:lang?/week/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["en"],
        //   },
        //   {
        //     matchPath: "/:lang?/lesson/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["en"],
        //   },
        //   {
        //     matchPath: "/:lang?/author/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["en"],
        //   },
        //   {
        //     matchPath: "/:lang?/habit/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["en"],
        //   },
        //   {
        //     matchPath: "/:lang?/questionnaire/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["en"],
        //   },
        // ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-react-i18next",
    //   options: {
    //     languages,
    //     defaultLanguage,
    //     i18nextOptions: {
    //       // debug: true,
    //       fallbackLng: defaultLanguage,
    //       supportedLngs: languages,
    //       defaultNS: "common",
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-use-dark-mode",
    //   options: {
    //     classNameDark: "dark",
    //   },
    // },
  ],
};

export default config;
