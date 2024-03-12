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

