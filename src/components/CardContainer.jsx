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
  cardData,
}) => {
  return (
    <div className={"grid grid-cols-4 gap-1 card-container"}>
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
            cardData={cardData}
          ></Card>
        ))}
    </div>
  );
};

export default CardContainer;
