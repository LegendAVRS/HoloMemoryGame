import { toTimeLeftString } from "../utils/toTimeLeftString";

const TimeLeft = ({ alt, timeLeft }) => {
  const timeString = toTimeLeftString(timeLeft);
  return (
    <>
      <div className={"time-concert-label"}>Time left till concert</div>

      <div className={"flex"}>
        <div className={"flex flex-col items-center"}>
          {<span className={"time-left-label"}>Days</span>}
          <span className={`time-left ${alt ? "time-left-alt" : ""}`}>
            {timeString[0] + timeString[1]}
          </span>
        </div>
        <div className={"flex flex-col items-center"}>
          {<div className={"time-left-label"}>&nbsp;</div>}
          <span className={`time-left ${alt ? "time-left-alt" : ""}`}>:</span>
        </div>

        <div className={"flex flex-col items-center"}>
          {<span className={"time-left-label"}>Hours</span>}
          <span className={`time-left ${alt ? "time-left-alt" : ""}`}>
            {timeString[3] + timeString[4]}
          </span>
        </div>
        <div className={"flex flex-col items-center"}>
          {<div className={"time-left-label"}>&nbsp;</div>}
          <span className={`time-left ${alt ? "time-left-alt" : ""}`}>:</span>
        </div>
        <div className={"flex flex-col items-center"}>
          {<span className={"time-left-label"}>Minutes</span>}
          <span className={`time-left ${alt ? "time-left-alt" : ""}`}>
            {timeString[6] + timeString[7]}
          </span>
        </div>
        <div className={"flex flex-col items-center"}>
          {<div className={"time-left-label"}>&nbsp;</div>}
          <span className={`time-left ${alt ? "time-left-alt" : ""}`}>:</span>
        </div>
        <div className={"flex flex-col items-center"}>
          {<span className={"time-left-label"}>Seconds</span>}
          <span className={`time-left ${alt ? "time-left-alt" : ""}`}>
            {timeString[9] + timeString[10]}
          </span>
        </div>
      </div>

      {timeLeft < 0 && <div className={`concert-time`}>Concert time!!!</div>}
    </>
  );
};

export default TimeLeft;
