import { shuffle } from "./Shuffle";

export const generateCardList = (cardNumber) => {
  let cardIdList = [];
  for (let id = 1; id <= 10; ++id) cardIdList.push(id);
  shuffle(cardIdList);

  let newCardList = [];
  let idIndex = 0;
  for (let i = 1; i <= cardNumber; i++) {
    newCardList.push(cardIdList[idIndex]);
    idIndex = i % 2 === 0 ? idIndex + 1 : idIndex;
  }
  return newCardList;
};
