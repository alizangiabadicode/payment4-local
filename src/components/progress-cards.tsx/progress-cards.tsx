import React, { FC } from "react";
import { CardsArrayProps } from "./cards-array";
import ProgressCard from "./progress-card";
import { SignupIcon } from "../../images/svg/signup-icon";
import SignupImage from "../../images/signup-image.png";
import SignupDarkImage from "../../images/signup-dark-image.png";
import GatewaySetupImage from "../../images/gateway-setup-image.png";
import GatewaySetupDarkImage from "../../images/gateway-setup-dark-image.png";
import ApiOrPaylinkImage from "../../images/aPI-or-paylink-creation-image.png";
import ApiOrPaylinkDarkImage from "../../images/aPI-or-paylink-creation-dark-image.png";
import SettlementRequestImage from "../../images/settlement -requests-image.png";
import SettlementRequestDarkImage from "../../images/settlement -requests-dark-image.png";
import SecurityMeasuresImage from "../../images/security-measures-image.png";
import SecurityMeasuresDarkImage from "../../images/security-measures-dark-image.png";
import {
  GatewaySetupIcon,
  SecurityMeasureIcon,
  SettlementRequestIcon,
} from "../../images/svg";
import ApiPaylinkCreationIcon from "../../images/svg/api-paylink-creation-icon";
import useDarkMode from "use-dark-mode";

const ProgressCards: FC = () => {
  const { value: isDark } = useDarkMode();
  const cardsArray: CardsArrayProps[] = [
    {
      title: "Sign Up",
      desc: "The initial step for merchants to join the Payment4 platform. To get started, merchants need to sign up for an account. Merchants can sign up by entering their email and password or using the quick option of Google Sign-In.",
      icon: <SignupIcon color="#9E6DFF" />,
      imageUrl: !isDark ? SignupImage : SignupDarkImage,
    },
    {
      title: "Gateway Setup",
      desc: "After signing up, merchants proceed to set up their cryptocurrency gateway. This involves configuring their preferences, linking their online store, and choosing supported blockchain networks.",
      icon: <GatewaySetupIcon color="#864AFF" />,
      imageUrl: isDark ? GatewaySetupDarkImage : GatewaySetupImage,
    },
    {
      title: "API or Paylink Creation",
      desc: "Merchants have the option to create 'paylinks' for easy payment processing without the need for an API. Payment4 API enables merchants to integrate cryptocurrency payments and blockchain transactions programmatically into websites or apps.",
      icon: <ApiPaylinkCreationIcon color="#864AFF" />,
      imageUrl: isDark ? ApiOrPaylinkDarkImage : ApiOrPaylinkImage,
    },
    {
      title: "Settlement Requests",
      desc: "Merchants initiate settlement requests, specifying the network and token for each transaction. This involves the system handling the entire settlement process, from identifying related accounts to transferring balances and covering fees.",
      icon: <SettlementRequestIcon color="#864AFF" />,
      imageUrl: isDark ? SettlementRequestDarkImage : SettlementRequestImage,
    },
    {
      title: "Security Measures",
      desc: "Implement robust encryption to secure user private keys, restricting access. Enhance account security with Two-Factor Authentication (2FA) Setup, allowing merchants to add an extra layer of protection to their Payment4 accounts.",
      icon: <SecurityMeasureIcon color="#864AFF" />,
      imageUrl: isDark ? SecurityMeasuresDarkImage : SecurityMeasuresImage,
    },
  ];
  return (
    <div className="flex flex-col items-center my-[30px] gap-y-[30px]">
      {cardsArray.map((card) => (
        <ProgressCard
          desc={card.desc}
          icon={card.icon}
          imageUrl={card.imageUrl}
          title={card.title}
        />
      ))}
    </div>
  );
};

export default ProgressCards;
