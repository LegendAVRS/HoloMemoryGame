import { shuffleCard } from "../utils/shuffleCard";

const ShuffleButton = ({
  cardNumber,
  setCardList,
  setChosenCardList,
  setDisabledCardList,
  setShuffled,
  sfx,
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
        sfx.shuffle.play();
      }}
    >
      Shuffle
    </button>
  );
};

export default ShuffleButton;
