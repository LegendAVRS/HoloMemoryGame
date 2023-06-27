import { useState } from "react";
import Card from "./Card";

const CardContainer = ({
  cardNumber,
  cardList,
  setCardList,
  chosenCardList,
  setChosenCardList,
  maxMatch,
  disabledCardList,
  shuffled,
  checkingCardList,
  setCheckingCardList,
}) => {
  return (
    <div className={"grid grid-cols-4 w-fit gap-1"}>
      {cardList &&
        cardList.map((card, ind) => (
          <Card
            id={card}
            key={ind}
            index={ind}
            chosenCardList={chosenCardList}
            setChosenCardList={setChosenCardList}
            maxMatch={maxMatch}
            disabledCardList={disabledCardList}
            shuffled={shuffled}
            setCheckingCardList={setCheckingCardList}
            checkingCardList={checkingCardList}
          ></Card>
        ))}
    </div>
  );
};

export default CardContainer;
