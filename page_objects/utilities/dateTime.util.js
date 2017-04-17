const currentTime = new Date();
const addZero = time => {
  if (time < 10) {
    return `0${time}`;
  }
  return `${time}`;
};
const addZeros = time => {
  if (time < 10) {
    return `00${time}`;
  } else if (time < 100) {
    return `0${time}`;
  }
  return `${time}`;
};
const year = currentTime.getUTCFullYear(),
  month = addZero(currentTime.getMonth() + 1),
  day = addZero(currentTime.getDate()),
  hour = addZero(currentTime.getHours()),
  minute = addZero(currentTime.getMinutes()),
  second = addZero(currentTime.getSeconds()),
  millisecond = addZeros(currentTime.getMilliseconds());

/**
 * Gets the current time and formats it into a pretty format
 * @returns {String} formatted time in "YYYY/MM/DD HH:MM:SS:LLL"
 */
exports.getFormattedTime = () => {
  return `${year}/${month}/${day} ${hour}:${minute}:${second}:${millisecond}`;
};
