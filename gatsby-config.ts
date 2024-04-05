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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `locale`,
    //     path: `${__dirname}/src/locales`,
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/locales`,
    //     name: `locale`
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: [`en`, `es`, `de`],
    //     defaultLanguage: `en`,
    //     // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    //     siteUrl: `https://example.com/`,
    //     // you can pass any i18next options
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false
    //     },
    //     pages: [
    //       {
    //         matchPath: '/:lang?/blog/:uid',
    //         getLanguageFromPath: true,
    //         excludeLanguages: ['es']
    //       },
    //       {
    //         matchPath: '/preview',
    //         languages: ['en']
    //       }
    //     ]
    //   }
    // }
  ],
};

export default config;
