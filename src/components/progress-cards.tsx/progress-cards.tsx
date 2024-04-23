"use client";
import React, { FC } from "react";
import ProgressCard from "./progress-card";
import { SignupIcon } from "../../../public/images/svg/signup-icon";
import {
  GatewaySetupIcon,
  SecurityMeasureIcon,
  SettlementRequestIcon,
} from "../../../public/images/svg";
import ApiPaylinkCreationIcon from "../../../public/images/svg/api-paylink-creation-icon";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

export interface CardsArrayProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  lightImageUrl: string;
  darkImageUrl: string;
  id?: number;
}

const ProgressCards: FC = () => {
  const { t } = useTranslation();
  const { resolvedTheme: theme } = useTheme();
  const cardsArray: CardsArrayProps[] = [
    {
      id: 1,
      title: t("signup"),
      desc: t("progressOneDesc"),
      icon: <SignupIcon color="#9E6DFF" />,
      lightImageUrl: "/images/signup-image.png",
      darkImageUrl: "/images/signup-dark-image.png",
    },
    {
      id: 2,
      title: t("gatewaySetup"),
      desc: t("progressTwoDesc"),
      icon: (
        <GatewaySetupIcon color={theme === "dark" ? "#9E6DFF" : "#864AFF"} />
      ),
      lightImageUrl: "/images/gateway-setup-image.png",
      darkImageUrl: "/images/gateway-setup-dark-image.png",
    },
    {
      id: 3,
      title: t("progressThree"),
      desc: t("progressThreeDesc"),
      icon: <ApiPaylinkCreationIcon color="#864AFF" />,
      lightImageUrl: "/images/aPI-or-paylink-creation-image.png",
      darkImageUrl: "/images/aPI-or-paylink-creation-dark-image.png",
    },
    {
      id: 4,
      title: t("settlementRequests"),
      desc: t("progressFourDesc"),
      icon: <SettlementRequestIcon color="#864AFF" />,
      lightImageUrl: "/images/settlement -requests-image.png",
      darkImageUrl: "/images/settlement -requests-dark-image.png",
    },
    {
      id: 5,
      title: t("securityMeasures"),
      desc: t("progressFiveDesc"),
      icon: (
        <SecurityMeasureIcon color={theme === "dark" ? "#9e6dff" : "#864AFF"} />
      ),
      lightImageUrl: "/images/security-measures-image.png",
      darkImageUrl: "/images/security-measures-dark-image.png",
    },
  ];
  return (
    <div className="flex flex-col items-center my-[130px] gap-y-[80px]">
      {cardsArray.map((card) => (
        <ProgressCard
          key={card.id}
          desc={card.desc}
          icon={card.icon}
          lightImageUrl={card.lightImageUrl}
          darkImageUrl={card.darkImageUrl}
          title={card.title}
        />
      ))}
    </div>
  );
};

export default ProgressCards;
