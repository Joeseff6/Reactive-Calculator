const entryValidation = (input, entry, expression, ans) => {
  let newEntry = "";
  let newExpression = expression ? expression : "";
  if ((input === "." && entry.includes("."))
    || (entry === "0" && input === "0")
    || (input === "neg" && entry === "0")
    || (input === "neg" && !entry)
    || (/[+/*-]/.test(input) && !entry && !expression && !ans)
  ) return [];
  if (/[0-9]/.test(input)) newEntry = entry + input;
  if (/[1-9]/.test(input) && entry === "0") newEntry = input;
  if ((input === "." && entry === "0")
    || (input === "." && !entry)
    ) {
      newEntry = "0.";
    } else if (input === "." && entry !== "0") {
      newEntry = entry + input;
    }
  if (input === "neg" && entry !== "0" && !/-/.test(entry)) {
    newEntry = `(-${entry})`;
  } else if (input === "neg" && entry !== "0" && /-/.test(entry)) {
    newEntry = entry.replace(/[()-]/g,"");
  }
  if (/[()]/.test(entry) && /[0-9.]/.test(input)) newEntry = entry.slice(0,-1) + input + ")";
  if (/[+/*-]/.test(input) && entry && !expression) {
    newExpression = `${entry} ${input}`;
  } else if (/[+/*-]/.test(input) && entry && expression) {
    newExpression = `${expression} ${entry} ${input}`;
  } else if (/[+/*-]/.test(input) && !entry && expression) {
    newExpression = `${expression.toString().slice(0,-1)}${input}`;
  } else if (/[+/*-]/.test(input) && !entry && !expression && ans) {
    newExpression = `${ans} ${input}`;
  }
  return [newEntry, newExpression];
}

export default entryValidation;
