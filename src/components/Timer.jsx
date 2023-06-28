import { useEffect } from "react";

const Timer = ({ time, setTime }) => {
  const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    let strMin = min < 10 ? "0" + min.toString() : min.toString();
    let strSec = sec < 10 ? "0" + sec.toString() : sec.toString();
    return `${strMin}:${strSec}`;
  };

  //   useEffect(() => {
  //     setTime()
  //   })

  return <div className={"box timer"}>{formatTime(time)}</div>;
};

export default Timer;
