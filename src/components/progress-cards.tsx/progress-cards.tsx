import React, { FC } from "react";
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
import { useTranslation } from "react-i18next";

export interface CardsArrayProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ProgressCards: FC = () => {
  const { value: isDark } = useDarkMode();
  const { t } = useTranslation();
  const cardsArray: CardsArrayProps[] = [
    {
      title: t("signup"),
      desc: t("progressOneDesc"),
      icon: <SignupIcon color="#9E6DFF" />,
      imageUrl: !isDark ? SignupImage : SignupDarkImage,
    },
    {
      title: t("gatewaySetup"),
      desc: t("progressTwoDesc"),
      icon: <GatewaySetupIcon color="#864AFF" />,
      imageUrl: isDark ? GatewaySetupDarkImage : GatewaySetupImage,
    },
    {
      title: t("progressThree"),
      desc: t("progressThreeDesc"),
      icon: <ApiPaylinkCreationIcon color="#864AFF" />,
      imageUrl: isDark ? ApiOrPaylinkDarkImage : ApiOrPaylinkImage,
    },
    {
      title: t("settlementRequests"),
      desc: t("progressFourDesc"),
      icon: <SettlementRequestIcon color="#864AFF" />,
      imageUrl: isDark ? SettlementRequestDarkImage : SettlementRequestImage,
    },
    {
      title: t("securityMeasures"),
      desc: t("progressFiveDesc"),
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
