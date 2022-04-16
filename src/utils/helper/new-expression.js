const newExpression = (input, updatedEntry, prevExpression) => {
  let updatedExpression = prevExpression ? prevExpression : "";
  if (/[+/*-]/.test(input) && updatedEntry && !prevExpression) {
    updatedExpression = `${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && updatedEntry && prevExpression) {
    updatedExpression = `${prevExpression} ${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && !updatedEntry && prevExpression) {
    updatedExpression = `${prevExpression.toString().slice(0,-1)}${input}`;
  } 
  // else if (/[+/*-]/.test(input) && !updatedEntry && !prevExpression && ans) {
  //   updatedExpression = `${ans} ${input}`;
  // }
  return updatedExpression;
}

export default newExpression;