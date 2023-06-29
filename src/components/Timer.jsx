const Timer = ({ time, done }) => {
  const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    let strMin = min < 10 ? "0" + min.toString() : min.toString();
    let strSec = sec < 10 ? "0" + sec.toString() : sec.toString();
    return `${strMin}:${strSec}`;
  };
  return (
    <>
      <div className={"label"}>Time</div>
      <div className={`box timer ${done ? "done" : ""}`}>
        {formatTime(time)}
      </div>
    </>
  );
};

export default Timer;
