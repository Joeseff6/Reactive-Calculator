const insertCommas = (string) => {
  if (string.length <= 3) return string;
  let formattedString = string.replace(/[()-]/g, "");
  let integer = formattedString;
  let decimal = "";
  if (/\./.test(formattedString)) {
    integer = /\d+(?=\.)/.exec(formattedString)[0];
    decimal = /\.\d*/.exec(formattedString)[0]
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
  return /[()-]/.test(string) ? `(-${finalInteger + decimal})` : finalInteger + decimal;
}

export default insertCommas;
