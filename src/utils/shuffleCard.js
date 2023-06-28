import { generateCardList } from "./generateCardList";
import { shuffle } from "./Shuffle";

export const shuffleCard = (
  cardNumber,
  setCardList,
  setChosenCardList,
  setDisabledCardList,
  setShuffled
) => {
  // shuffles
  let shuffledCardList = generateCardList(cardNumber);
  shuffle(shuffledCardList);
  setChosenCardList([]);
  setDisabledCardList([]);
  setShuffled(true);

  setCardList(shuffledCardList);
};
