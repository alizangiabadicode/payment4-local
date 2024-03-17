import "./src/styles/global.css";
import React from "react";
import Layout from "./src/components/layout";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export const wrapPageElement = ({ element }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>{element}</Layout>
    </I18nextProvider>
  );
};
