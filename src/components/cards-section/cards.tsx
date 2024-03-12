import React from "react";
import { cards } from "./cards-array";
import Card from "./card";

const Cards: React.FC = () => {
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
              key={card.title}
            />
          </>
        );
      })}
    </div>
  );
};

export default Cards;
