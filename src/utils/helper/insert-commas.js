const insertCommas = (string) => {
  if (string.length < 4) return string;
  let reversedString = string.split("").reverse().join("");
  let counter = 0
  let stringWithCommas = "";
  for (let i = 0; i < string.length; i++) {
    counter++;
    if ((counter === 3) && ( i !== reversedString.length - 1)) {
      stringWithCommas += reversedString[i] + ",";
      counter = 0;
    } else {
      stringWithCommas += reversedString[i];
    }
  }
  return stringWithCommas.split("").reverse().join("");
}

export default insertCommas;