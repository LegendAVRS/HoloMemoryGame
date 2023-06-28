import { useEffect, useState } from "react";
import ShuffleButton from "./components/ShuffleButton";
import CardContainer from "./components/CardContainer";
import { shuffleCard } from "./utils/shuffleCard";
import Timer from "./components/Timer";
import IconContainer from "./components/IconContainer";
import InfoContainer from "./components/InfoContainer";
import MoveCount from "./components/MoveCount";

function App() {
  // states
  const [cardNumber, setCardNumber] = useState(16);
  const [cardList, setCardList] = useState([]);
  const [chosenCardList, setChosenCardList] = useState([]);
  const [maxMatch, setMaxMatch] = useState(2);
  const [disabledCardList, setDisabledCardList] = useState([]);
  const [shuffled, setShuffled] = useState(false);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [moveCount, setMoveCount] = useState(0);

  // setting card list on initial load
  useEffect(() => {
    shuffleCard(
      cardNumber,
      setCardList,
      setChosenCardList,
      setDisabledCardList,
      setShuffled
    );
  }, []);

  // handles card showing on shuffle
  useEffect(() => {
    if (shuffled) {
      setTimeout(() => setShuffled(false), 1000);
      if (timeInterval !== null) clearInterval(timeInterval);
      const interval = setInterval(() => setTime((time) => time + 1), 1000);
      setTimeInterval(interval);
      setTime(0);
      setMoveCount(0);
    }
  }, [shuffled]);

  // handles card choosing event
  useEffect(() => {
    if (chosenCardList.length !== 0) setMoveCount((moveCount) => moveCount + 1);
    if (disabledCardList.length === cardNumber) clearInterval(timeInterval);
    if (chosenCardList.length < maxMatch) return;
    let matched = true,
      tempCard = chosenCardList[0];
    for (let card of chosenCardList) {
      if (card.id !== tempCard.id) {
        matched = false;
        break;
      }
      tempCard = card;
    }
    if (matched) {
      setTimeout(() => {
        setDisabledCardList([
          ...disabledCardList,
          ...chosenCardList.map((card) => card.index),
        ]);
      }, 1000);
    }
    setTimeout(() => {
      setChosenCardList([]);
    }, 1000);
  }, [chosenCardList, disabledCardList]);

  // components
  return (
    <div className={"body"}>
      <IconContainer></IconContainer>
      <CardContainer
        cardNumber={cardNumber}
        cardList={cardList}
        setCardList={setCardList}
        chosenCardList={chosenCardList}
        setChosenCardList={setChosenCardList}
        maxMatch={maxMatch}
        disabledCardList={disabledCardList}
        shuffled={shuffled}
      ></CardContainer>
      <InfoContainer>
        <Timer time={time}></Timer>
        <ShuffleButton
          cardList={cardList}
          setCardList={setCardList}
          setDisabledCardList={setDisabledCardList}
          setChosenCardList={setChosenCardList}
          setShuffled={setShuffled}
          cardNumber={cardNumber}
        ></ShuffleButton>
        <MoveCount moveCount={moveCount}></MoveCount>
      </InfoContainer>
    </div>
  );
}

export default App;
