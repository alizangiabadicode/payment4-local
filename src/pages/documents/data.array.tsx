import * as React from "react";
import Introduction from "./components/introduction";
import TransactionSection from "./components/transaction";
import Settlements from "./components/settlements";
import SystemLimits from "./components/system.limits";
import ApiKeySection from "./components/api.key";
import SecuritySection from "./components/security";
import ApiSection from "./components/api";
import CreatePayment from "./components/create.payment/create.payment";
import VerifyPayment from "./components/verify.payment/verify.payment";
import { SDKSection } from "./components/SDK/sdk";
import { LaravelSDKSection } from "./components/SDK/laravel.sdk";
import { NodeSDKSection } from "./components/SDK/node.sdk";
import { PluginsSection } from "./components/plugins/plugins";
import { WoocommerceSection } from "./components/plugins/woocommerce.section";
import { WHMCSSection } from "./components/plugins/whmcs.section";
import DevelopersSection from "./components/developers.section";
import ContactUsSection from "./components/contact.us.section";
import { t } from "i18next";

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

export const docArray: DocArrayInterface[] = [
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
