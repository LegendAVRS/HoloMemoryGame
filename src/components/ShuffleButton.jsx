import { shuffleCard } from "../utils/shuffleCard";

const ShuffleButton = ({
  cardNumber,
  setCardList,
  setChosenCardList,
  setDisabledCardList,
  setShuffled,
}) => {
  return (
    <button
      className={"btn"}
      onClick={() => {
        shuffleCard(
          cardNumber,
          setCardList,
          setChosenCardList,
          setDisabledCardList,
          setShuffled
        );
        var shuffleAudio = new Audio("assets/sfx/shuffle.mp3");
        shuffleAudio.play();
      }}
    >
      Shuffle
    </button>
  );
};

export default ShuffleButton;
