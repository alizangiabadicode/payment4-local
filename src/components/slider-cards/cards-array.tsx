import * as React from "react";
import {
  CreditCardImg,
  DollarIcon,
  ShoppingIcon,
  SupportIcon,
} from "../../images/svg";
import globalSelling from "../../images/global-selling-img.png";
import instantSettlement from "../../images/instant-settlement-img.png";
import twentyFourHourSupport from "../../images/twenty-four-hour-support.png";
import cryptoDiversity from "../../images/crypto-diversity.png";

export interface CardsArrayInterface {
  imageUrl: string;
  title: string;
  logo: React.ReactNode;
  desc: string;
}

export const cardsArray: CardsArrayInterface[] = [
  {
    imageUrl: globalSelling,
    title: "Global Selling",
    desc: "Expand worldwide, ensuring success in diverse markets without spatial restrictions.",
    logo: <ShoppingIcon />,
  },
  {
    imageUrl: instantSettlement,
    title: "Instant Settlement",
    desc: "Fast checkout, available around the clock for seamless global transactions.",
    logo: <CreditCardImg />,
  },
  {
    imageUrl: twentyFourHourSupport,
    title: "24-hour support",
    desc: "24-hour availability for uninterrupted guidance and seamless transaction experience.",
    logo: <SupportIcon />,
  },
  {
    imageUrl: cryptoDiversity,
    title: "Crypto Diversity",
    desc: "Support for various cryptocurrencies, unlocking endless business possibilities",
    logo: <DollarIcon />,
  },
];
