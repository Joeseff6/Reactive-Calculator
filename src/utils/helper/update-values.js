const updateValues = (input, entry, expression, ans) => {
  if (
    (input === "." && entry.includes(".")) ||
    (entry === "0" && input === "0") ||
    (input === "neg" && entry === "0") ||
    (input === "neg" && !entry) ||
    (/[+/*-]/.test(input) && !entry && !expression && !ans)
  )
    return [];
  let updatedEntry = newEntry(input, entry);
  let updatedExpression = newExpression(input, entry, expression, ans);

  return [updatedEntry, updatedExpression];
};

const newEntry = (input, prevEntry) => {
  let updatedEntry = "";
  if (/[0-9]/.test(input)) updatedEntry = prevEntry + input;
  if ((/[1-9]/.test(input) && prevEntry === "0") || prevEntry === "Err")
    updatedEntry = input;
  if ((input === "." && prevEntry === "0") || (input === "." && !prevEntry)) {
    updatedEntry = "0.";
  } else if (input === "." && prevEntry !== "0") {
    updatedEntry = prevEntry + input;
  }
  if (input === "neg" && prevEntry !== "0" && !/-/.test(prevEntry)) {
    updatedEntry = `(-${prevEntry})`;
  } else if (input === "neg" && prevEntry !== "0" && /-/.test(prevEntry)) {
    updatedEntry = prevEntry.replace(/[()-]/g, "");
  }
  if (/[()]/.test(prevEntry) && /[0-9.]/.test(input))
    updatedEntry = prevEntry.slice(0, -1) + input + ")";
  return updatedEntry;
};

const newExpression = (input, entry, prevExpression, ans) => {
  let updatedExpression = prevExpression ? prevExpression : "";
  if (/[+/*-]/.test(input) && /\.(?!\d)/.test(entry))
    entry = entry.replace(".", "");
  if (/[+/*-]/.test(input) && entry && !prevExpression) {
    updatedExpression = `${entry} ${input}`;
  } else if (/[+/*-]/.test(input) && entry && prevExpression) {
    updatedExpression = `${prevExpression} ${entry} ${input}`;
  } else if (/[+/*-]/.test(input) && !entry && prevExpression) {
    updatedExpression = `${prevExpression.toString().slice(0, -1)}${input}`;
  } else if (/[+/*-]/.test(input) && !entry && !prevExpression && ans) {
    updatedExpression = `${ans} ${input}`;
  }
  return updatedExpression;
};

export default updateValues;
