const findLowestIndex = (array) => {
  let string = array.join("");
  let regex = null;
  if (array.includes("x") || array.includes("÷")) {
    regex = /[x÷]/;
  } else if (array.includes("+") || array.includes("-")) {
    regex = /[+-]/;
  }
  return array.indexOf(string.match(regex)[0]);
}