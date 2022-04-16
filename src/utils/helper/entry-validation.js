const entryValidation = (input, currentEntry, currentExpression, currentAns) => {
  if ((input === "." && currentEntry.includes("."))
    || (currentEntry === "0" && input === "0")
    || (input === "neg" && currentEntry === "0")
    || (input === "neg" && !currentEntry)
    || (/[+/*-]/.test(input) && !currentEntry && !currentExpression && !currentAns)
  ) return "";
  return input;
}

export default entryValidation;
