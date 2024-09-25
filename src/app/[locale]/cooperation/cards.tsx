import React from "react";
import Card from "./card";
import { CardProps } from "./types";
import { useTranslation } from "react-i18next";

const Cards: React.FC = () => {
  const { t } = useTranslation();
  const cardData: CardProps[] = [
    {
      title: t("vendorPage.cards.invite.title"),
      description: t("vendorPage.cards.invite.description"),
      buttonText: t("joinUs"),
      darkImageSrc: "/images/sub.member.dark.png",
      lightImageSrc: "/images/sub.member.light.png",
      reverse: true,
    },
    {
      title: t("vendorPage.cards.businessPartner.title"),
      description: t("vendorPage.cards.businessPartner.description"),
      buttonText: t("joinUs"),
      darkImageSrc: "/images/business.partner.dark.png",
      lightImageSrc: "/images/business.partner.light.png",
      reverse: false,
    },
    {
      title: t("vendorPage.cards.productPromotion.title"),
      description: t("vendorPage.cards.productPromotion.description"),
      buttonText: t("joinUs"),
      darkImageSrc: "/images/product.promotion.dark.png",
      lightImageSrc: "/images/product.promotion.light.png",
      reverse: true,
    },
  ];
  return (
    <div className="mx-auto grid grid-cols-1 gap-[45px] mt-[65px]">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          darkImageSrc={card.darkImageSrc}
          lightImageSrc={card.lightImageSrc}
          reverse={card.reverse}
        />
      ))}
    </div>
  );
};

export default Cards;
