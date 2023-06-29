// react import
import { useEffect, useState } from "react";

// components
import ShuffleButton from "./components/ShuffleButton";
import CardContainer from "./components/CardContainer";
import Timer from "./components/Timer";
import IconContainer from "./components/IconContainer";
import InfoContainer from "./components/InfoContainer";
import MoveCount from "./components/MoveCount";

// utils
import { shuffleCard } from "./utils/shuffleCard";
import PrContainer from "./components/PrContainer";

// audio
const sfx = {
  shuffle: new Audio("assets/sfx/shuffle.mp3"),
  correct: new Audio("assets/sfx/correct.mp3"),
};

// card stuff
const cardData = [
  { img: "./assets/pics/back.webp" },
  { img: "./assets/pics/bae-1.webp", audio: new Audio("assets/sfx/bae.mp3") },
  {
    img: "./assets/pics/fauna-1.webp",
    audio: new Audio("assets/sfx/fauna.mp3"),
  },
  {
    img: "./assets/pics/mumei-1.webp",
    audio: new Audio("assets/sfx/mumei.mp3"),
  },
  { img: "./assets/pics/irys-1.webp", audio: new Audio("assets/sfx/irys.mp3") },
  {
    img: "./assets/pics/kronii-1.webp",
    audio: new Audio("assets/sfx/kronii.mp3"),
  },
  {
    img: "./assets/pics/calli-1.webp",
    audio: new Audio("assets/sfx/calli.mp3"),
  },
  { img: "./assets/pics/gura-1.webp", audio: new Audio("assets/sfx/gura.mp3") },
  { img: "./assets/pics/ame-1.webp", audio: new Audio("assets/sfx/ame.mp3") },
  {
    img: "./assets/pics/kiara-1.webp",
    audio: new Audio("assets/sfx/kiara.mp3"),
  },
  { img: "./assets/pics/ina-1.webp", audio: new Audio("assets/sfx/ina.mp3") },
];

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
  const [done, setDone] = useState(false);

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
      setTimeout(() => setShuffled(false), 2000);
      if (timeInterval !== null) clearInterval(timeInterval);
      const interval = setInterval(() => setTime((time) => time + 1), 1000);
      setTimeInterval(interval);
      setTime(0);
      setMoveCount(0);
      setDone(false);
    }
  }, [shuffled]);

  // handles card choosing event
  useEffect(() => {
    if (chosenCardList.length !== 0) setMoveCount((moveCount) => moveCount + 1);
    if (disabledCardList.length === cardNumber && !shuffled) {
      clearInterval(timeInterval);
      setDone(true);
    }

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
        sfx.correct.play();

        cardData[chosenCardList[0].id].audio.play();
      }, 700);
    }
    setTimeout(() => {
      setChosenCardList([]);
    }, 700);
  }, [chosenCardList, disabledCardList]);

  return (
    <div className={"body"}>
      <img className={"dots"} src="assets\pics\deco\bg_deco_dot.svg"></img>
      <img className={"deco"} src="assets\pics\deco\bg_deco_geometry.png"></img>
      <IconContainer alt={false}></IconContainer>
      <CardContainer
        cardNumber={cardNumber}
        cardList={cardList}
        setCardList={setCardList}
        chosenCardList={chosenCardList}
        setChosenCardList={setChosenCardList}
        maxMatch={maxMatch}
        disabledCardList={disabledCardList}
        shuffled={shuffled}
        cardData={cardData}
      ></CardContainer>
      <InfoContainer>
        <IconContainer alt={true}></IconContainer>
        <Timer time={time} done={done}></Timer>
        <ShuffleButton
          cardList={cardList}
          setCardList={setCardList}
          setDisabledCardList={setDisabledCardList}
          setChosenCardList={setChosenCardList}
          setShuffled={setShuffled}
          cardNumber={cardNumber}
          sfx={sfx}
        ></ShuffleButton>
        <MoveCount moveCount={moveCount} done={done}></MoveCount>
        <PrContainer></PrContainer>
      </InfoContainer>
    </div>
  );
}

export default App;
