"use client";
import React from "react";
import Card, { CardsType } from "./card";
import { useTranslation } from "react-i18next";

const Cards: React.FC = () => {
  const { t } = useTranslation();
  const cards: CardsType[] = [
    {
      id: 1,
      title: t("cardOne"),
      desc: t("cardOneDesc"),
      buttonText: t("signup"),
      lightImageUrl: "/images/img-card-one.png",
      darkImageUrl: "/images/image-card-one-dark.png",
    },
    {
      id: 2,
      title: t("cardTwo"),
      desc: t("cardTwoDesc"),
      buttonText: t("createPaymentPage"),
      lightImageUrl: "/images/img-card-two.png",
      darkImageUrl: "/images/image-card-two-dark.png",
    },
    {
      id: 3,
      title: t("cardThree"),
      desc: t("cardThreeDesc"),
      buttonText: t("createPaymentLink"),
      lightImageUrl: "/images/img-card-three.png",
      darkImageUrl: "/images/image-card-three-dark.png",
    },
    {
      id: 4,
      title: t("cardFour"),
      desc: t("cardFourDesc"),
      buttonText: t("joinUs"),
      lightImageUrl: "/images/img-card-four.png",
      darkImageUrl: "/images/image-card-four-dark.png",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-5">
      {cards.map((card) => {
        return (
          <Card
            buttonText={card.buttonText}
            desc={card.desc}
            lightImageUrl={card.lightImageUrl}
            darkImageUrl={card.darkImageUrl}
            title={card.title}
            key={card.id}
          />
        );
      })}
    </div>
  );
};

export default Cards;
