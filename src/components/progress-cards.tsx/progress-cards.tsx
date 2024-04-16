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

import { useTheme } from "next-themes";
import { t } from "i18next";
export interface CardsArrayProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ProgressCards: FC = () => {
  const { resolvedTheme: isDark } = useTheme();
  const cardsArray: CardsArrayProps[] = [
    {
      title: t("signup"),
      desc: t("progressOneDesc"),
      icon: <SignupIcon color="#9E6DFF" />,
      imageUrl: !isDark
        ? "/../../../public/images/signup-image.png"
        : "/../../../public/images/signup-dark-image.png",
    },
    {
      title: t("gatewaySetup"),
      desc: t("progressTwoDesc"),
      icon: <GatewaySetupIcon color="#864AFF" />,
      imageUrl: isDark
        ? "/../../../public/images/gateway-setup-dark-image.png"
        : "/../../../public/images/gateway-setup-image.png",
    },
    {
      title: t("progressThree"),
      desc: t("progressThreeDesc"),
      icon: <ApiPaylinkCreationIcon color="#864AFF" />,
      imageUrl: isDark
        ? "/../../../public/images/aPI-or-paylink-creation-dark-image.png"
        : "/../../../public/images/aPI-or-paylink-creation-image.png",
    },
    {
      title: t("settlementRequests"),
      desc: t("progressFourDesc"),
      icon: <SettlementRequestIcon color="#864AFF" />,
      imageUrl: isDark
        ? "/../../../public/images/settlement -requests-dark-image.png"
        : "/../../../public/images/settlement -requests-image.png",
    },
    {
      title: t("securityMeasures"),
      desc: t("progressFiveDesc"),
      icon: <SecurityMeasureIcon color="#864AFF" />,
      imageUrl: isDark
        ? "/../../../public/images/security-measures-dark-image.png"
        : "/../../../public/images/security-measures-image.png",
    },
  ];
  return (
    <div className="flex flex-col items-center my-[30px] gap-y-[30px]">
      {cardsArray.map((card) => (
        <ProgressCard
          key={card.title}
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
