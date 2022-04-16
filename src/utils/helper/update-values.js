const updateValues = (input, entry, expression, ans) => {
  if ((input === "." && input.includes("."))
    || (entry === "0" && input === "0")
    || (input === "neg" && entry === "0")
    || (input === "neg" && !entry)
    || (/[+/*-]/.test(input) && !entry && !expression && !ans)
  ) return [];
  
  let updatedEntry = newEntry(input, entry);
  let updatedExpression = newExpression(input, entry, expression, ans);

  return [updatedEntry, updatedExpression];
}

const newEntry = (input, prevEntry) => {
  let updatedEntry = "";
  if (/[0-9]/.test(input)) updatedEntry = prevEntry + input;
  if (/[1-9]/.test(input) && prevEntry === "0") updatedEntry = input;
  if ((input === "." && prevEntry === "0")
    || (input === "." && !prevEntry)
    ) {
      updatedEntry = "0.";
    } else if (input === "." && prevEntry !== "0") {
      updatedEntry = prevEntry + input;
    }
  if (input === "neg" && prevEntry !== "0" && !/-/.test(prevEntry)) {
    updatedEntry = `(-${prevEntry})`;
  } else if (input === "neg" && prevEntry !== "0" && /-/.test(prevEntry)) {
    updatedEntry = prevEntry.replace(/[()-]/g,"");
  }
  if (/[()]/.test(prevEntry) && /[0-9]/.test(input)) updatedEntry = prevEntry.slice(0,-1) + input + ")";
  console.log(updatedEntry)
  return updatedEntry;
}

const newExpression = (input, updatedEntry, prevExpression, currentAns) => {
  console.log([input, updatedEntry, prevExpression, currentAns])
  let updatedExpression = prevExpression ? prevExpression : "";
  if (/[+/*-]/.test(input) && updatedEntry && !prevExpression) {
    console.log("pk")
    updatedExpression = `${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && updatedEntry && prevExpression) {
    updatedExpression = `${prevExpression} ${updatedEntry} ${input}`;
  } else if (/[+/*-]/.test(input) && !updatedEntry && prevExpression) {
    updatedExpression = `${prevExpression.toString().slice(0,-1)}${input}`;
  } 
  else if (/[+/*-]/.test(input) && !updatedEntry && !prevExpression && currentAns) {
    updatedExpression = `${currentAns} ${input}`;
  }
  console.log(updatedExpression)
  return updatedExpression;
}

export default updateValues;
