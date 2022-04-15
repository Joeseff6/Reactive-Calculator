const insertCommas = (string) => {
  if (string.length <= 4 && /\./.test(string)) return string;
  let integer = string, decimal = "";
  if (/[()-]/g.test(integer)) integer = integer.replace(/[()-]/g, "");
  let reversedInteger = integer.split("").reverse().join("");
  let counter = 0;
  let integerWithCommas = "";
  for (let i = 0; i < reversedInteger.length; i++) {
    counter++;
    if ((counter === 3) && ( i !== reversedInteger.length - 1)) {
      integerWithCommas += reversedInteger[i] + ",";
      counter = 0;
    } else {
      integerWithCommas += reversedInteger[i];
    }
  }
  integerWithCommas = integerWithCommas.split("").reverse().join("");
  if (/[()]/g.test(string)) {
    return `(-${integerWithCommas})`;
  } else if (/-/.test(string)) {
    return `-${integerWithCommas}`;
  } else {
    return integerWithCommas;
  }
}

export default insertCommas;