const MoveCount = ({ moveCount, done }) => {
  return (
    <>
      <div className={"label"}>Count</div>
      <div className={`box ${done ? "done" : ""}`}>{moveCount}</div>
    </>
  );
};

export default MoveCount;
