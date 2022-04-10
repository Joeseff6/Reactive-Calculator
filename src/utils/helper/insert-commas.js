const insertCommas = (string) => {
  if (string.length < 4) return string;
  let stringCopy = string;
  if (string[0] === "-") stringCopy = stringCopy.slice(1,stringCopy.length);
  let reversedString = stringCopy.split("").reverse().join("");
  let counter = 0;
  let stringWithCommas = "";
  for (let i = 0; i < reversedString.length; i++) {
    counter++;
    if ((counter === 3) && ( i !== reversedString.length - 1)) {
      stringWithCommas += reversedString[i] + ",";
      counter = 0;
    } else {
      stringWithCommas += reversedString[i];
    }
  }
  return string[0] === "-" ? "-" + stringWithCommas.split("").reverse().join("") : stringWithCommas.split("").reverse().join("");
}

export default insertCommas;