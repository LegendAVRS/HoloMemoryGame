const Card = ({
  id,
  chosenCardList,
  setChosenCardList,
  index,
  maxMatch,
  disabledCardList,
  shuffled,
  cardData,
}) => {
  const selected = () => {
    return chosenCardList.some((card) => card.index === index);
  };

  const valid = () => {
    return !(
      selected() ||
      disabled() ||
      chosenCardList.length === maxMatch ||
      shuffled
    );
  };

  const disabled = () => {
    return disabledCardList.includes(index);
  };

  const handleClick = () => {
    if (!valid()) return;
    let newChosenCardList = [...chosenCardList, { id, index }];
    setChosenCardList(newChosenCardList);
  };
  return (
    <div
      className={`card ${selected() || shuffled ? "selected" : ""} ${
        disabled() && !shuffled ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <img src={cardData[0].img} className={"back"}></img>
      <img src={cardData[id].img} className={"front"}></img>
    </div>
  );
};

export default Card;
