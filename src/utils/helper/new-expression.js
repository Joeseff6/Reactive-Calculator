const newExpression = (input, updatedEntry, prevExpression) => {
  let updatedExpression = prevExpression ? prevExpression : "";
  if (/[()]/.test(updatedEntry) && /[0-9]/.test(input)) newEntry = updatedEntry.slice(0,-1) + input + ")";
  if (/[+/*-]/.test(input) && updatedEntry && !expression) {
    updatedExpression = `${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && updatedEntry && expression) {
    updatedExpression = `${expression} ${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && !updatedEntry && expression) {
    updatedExpression = `${prevExpression.toString().slice(0,-1)}${input}`;
  } else if (/[+/*-]/.test(input) && !updatedEntry && !expression && ans) {
    updatedExpression = `${ans} ${input}`;
  }
}

export default newExpression;