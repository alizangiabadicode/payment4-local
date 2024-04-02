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
    title: "Introduction",
    content: <Introduction />,
  },
  {
    id: "Transaction",
    title: "Transaction",
    content: <TransactionSection />,
  },
  {
    id: "Settlements",
    title: "Settlements",
    content: <Settlements />,
  },
  {
    id: "SystemLimits",
    title: "System limits",
    content: <SystemLimits />,
  },
  {
    id: "ApiKey",
    title: "Api key",
    content: <ApiKeySection />,
  },
  {
    id: "Security",
    title: "Authentication and Security",
    content: <SecuritySection />,
  },
  {
    id: "Api",
    title: "Api",
    content: <ApiSection />,
    subItems: [
      {
        id: "createPayment",
        title: "create payment",
        content: <CreatePayment />,
      },
      {
        id: "verifyPayment",
        title: "verify payment",
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
        title: "Node SDK",
        content: <NodeSDKSection />,
      },
      {
        id: "LaravelSDK",
        title: "Laravel SDK",
        content: <LaravelSDKSection />,
      },
    ],
  },
  {
    id: "Plugins",
    title: "Plugins",
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
    title: "Developers",
    content: <DevelopersSection />,
  },
  {
    id: "Contact",
    title: "Contact us",
    content: <ContactUsSection />,
  },
];
