const newExpression = (input, updatedEntry, prevExpression, currentAns) => {
  console.log(currentAns)
  let updatedExpression = prevExpression ? prevExpression : "";
  if (/[+/*-]/.test(input) && updatedEntry && !prevExpression) {
    updatedExpression = `${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && updatedEntry && prevExpression) {
    updatedExpression = `${prevExpression} ${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && !updatedEntry && prevExpression) {
    updatedExpression = `${prevExpression.toString().slice(0,-1)}${input}`;
  } 
  else if (/[+/*-]/.test(input) && !updatedEntry && !prevExpression && currentAns) {
    updatedExpression = `${currentAns} ${input}`;
  }
  return updatedExpression;
}

export default newExpression;