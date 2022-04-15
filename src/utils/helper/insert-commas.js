const insertCommas = (string) => {
  if (string.length <= 4 && /\./.test(string)) return string;
  let stringCopy = string;
  if (/[()-]/g.test(string)) stringCopy = stringCopy.replace(/[()-]/g, "");
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
  stringWithCommas = stringWithCommas.split("").reverse().join("");
  if (/[()]/g.test(string)) {
    return `(-${stringWithCommas})`;
  } else if (/-/.test(string)) {
    return `-${stringWithCommas}`;
  } else {
    return stringWithCommas;
  }
}

export default insertCommas;