import "../styles.css";

const cardImages = [
  { src: "./assets/pics/back.webp" },
  { src: "./assets/pics/bae-1.webp" },
  { src: "./assets/pics/fauna-1.webp" },
  { src: "./assets/pics/mumei-1.webp" },
  { src: "./assets/pics/irys-1.webp" },
  { src: "./assets/pics/kronii-1.webp" },
  { src: "./assets/pics/calli-1.webp" },
  { src: "./assets/pics/gura-1.webp" },
  { src: "./assets/pics/ame-1.webp" },
  { src: "./assets/pics/kiara-1.webp" },
  { src: "./assets/pics/ina-1.webp" },
];

const Card = ({
  id,
  chosenCardList,
  setChosenCardList,
  index,
  maxMatch,
  disabledCardList,
  shuffled,
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
        disabled() ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <img src={cardImages[0].src} className={"back"}></img>
      <img src={cardImages[id].src} className={"front"}></img>
    </div>
  );
};

export default Card;
