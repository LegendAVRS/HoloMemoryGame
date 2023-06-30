const timeToString = (time) => {
  return time >= 10 ? time.toString() : "0" + time.toString();
};

export const toTimeLeftString = (timeLeft) => {
  if (timeLeft <= 0) return "00:00:00:00";
  const hourLeft = timeLeft / (3600 * 1000);
  const minuteLeft = timeLeft / (60 * 1000);
  const secondLeft = timeLeft / 1000;

  const dayLeft = hourLeft / 24;

  const dayString = timeToString(Math.floor(dayLeft));
  const hourString = timeToString(Math.floor(hourLeft % 24));
  const minuteString = timeToString(Math.floor(minuteLeft % 60));
  const secondString = timeToString(Math.floor(secondLeft % 60));

  return `${dayString}:${hourString}:${minuteString}:${secondString}`;
};
