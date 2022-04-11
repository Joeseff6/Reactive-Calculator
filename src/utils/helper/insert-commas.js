const insertCommas = (string) => {
  if (string.length < 4) return string;
  let integer = string.replace(/[()-]/g,"");
  let decimal = "";
  if (/\./.test(string)) {
    integer = string.match(/\d+(?=\.)/)[0];
    decimal = string.match(/\.\d+/)[0];
  }
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
    return `(-${integerWithCommas}${decimal})`;
  } else if (/-/.test(string)) {
    return `-${integerWithCommas}${decimal}`;
  } else {
    return `${integerWithCommas}${decimal}`;
  }
}

export default insertCommas;
