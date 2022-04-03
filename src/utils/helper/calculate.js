const calculate = (string) => {
  let array = string.split(" ");
  while (array.length !== 1) {
      let lowestIndex = findLowestIndex(array);
      let [firstNumber, operator, secondNumber] = array.splice(lowestIndex - 1, 3)
      let result = performMath(firstNumber,operator, secondNumber);
      array.splice(lowestIndex - 1, 0,result);
  } 
  return array[0];
}

const findLowestIndex = (array) => {
  let string = array.join("");
  let regex = null;
  if (array.includes("x") || array.includes("÷")) {
    regex = /[x÷]/;
  } else if (array.includes("+") || array.includes("-")) {
    regex = /[+-]/;
  }
  return array.indexOf(string.slice(0,string.length).match(regex)[0]);
}

const performMath = (firstNumber, operator, secondNumber) => {
  let result = 0;
  switch (operator) {
    case "x":
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case "÷":
      result = Number(firstNumber) / Number(secondNumber);
      break;
    case "+":
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(secondNumber);
      break;
    default:
      result = "Err";
  }
  return result;
}

export default calculate;
