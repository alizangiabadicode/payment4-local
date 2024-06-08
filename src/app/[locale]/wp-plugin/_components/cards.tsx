import React from "react";
import { cardsArray } from "./cards.array";
import { Card } from "./card";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[100px] gap-y-[66px] my-[100px] px-[10px] xl:px-[20px] ">
      {cardsArray.map((card) => {
        return <Card key={card.title} {...card} />;
      })}
    </div>
  );
};
