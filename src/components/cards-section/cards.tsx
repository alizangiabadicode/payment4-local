"use client";

import React from "react";
import Card, { CardsType } from "./card";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const Cards: React.FC = () => {
  const { resolvedTheme: theme } = useTheme();
  const { t } = useTranslation();
  const cards: CardsType[] = [
    {
      id: 1,
      title: t("cardOne"),
      desc: t("cardOneDesc"),
      buttonText: t("signup"),
      imageUrl:
        theme === "dark"
          ? "/images/image-card-one-dark.png"
          : "/images/img-card-one.png",
    },
    {
      id: 2,
      title: t("cardTwo"),
      desc: t("cardTwoDesc"),
      buttonText: t("createPaymentPage"),
      imageUrl:
        theme === "dark"
          ? "/images/image-card-two-dark.png"
          : "/images/img-card-two.png",
    },
    {
      id: 3,
      title: t("cardThree"),
      desc: t("cardThreeDesc"),
      buttonText: t("createPaymentLink"),
      imageUrl:
        theme === "dark"
          ? "/images/image-card-three-dark.png"
          : "/images/img-card-three.png",
    },
    {
      id: 4,
      title: t("cardFour"),
      desc: t("cardFourDesc"),
      buttonText: t("joinUs"),
      imageUrl:
        theme === "dark"
          ? "/images/image-card-four-dark.png"
          : "/images/img-card-four.png",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-5">
      {cards.map((card) => {
        return (
          <>
            <Card
              buttonText={card.buttonText}
              desc={card.desc}
              imageUrl={card.imageUrl}
              title={card.title}
              key={card.id}
            />
          </>
        );
      })}
    </div>
  );
};

export default Cards;
