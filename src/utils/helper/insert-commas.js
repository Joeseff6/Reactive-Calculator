const insertCommas = (string) => {
  if (/[^\d\.]/.test(string)) return;
  if (string.length <= 3) return string;
  let integer = string;
  let decimal = "";
  if (/\./.test(string)) {
    integer = /\d+(?=\.)/.exec(string)[0];
    decimal = /\.\d+/.test(string) ? /\.\d+/.exec(string)[0] : "";
  }
  let reversedInteger = integer.split("").reverse().join("");
  let integerWithCommas = "";
  let counter = 0;
  for (let i = 0; i < reversedInteger.length; i++) {
    counter++;
    if (counter === 3 && i !== reversedInteger.length - 1) {
      integerWithCommas += reversedInteger[i] + ",";
      counter = 0;
    } else {
      integerWithCommas += reversedInteger[i];
    }
  }
  let finalInteger = integerWithCommas.split("").reverse().join("");
  return finalInteger + decimal;
}

export default insertCommas;
