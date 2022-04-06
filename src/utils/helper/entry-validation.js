const entryValidation = (input, entry, result, ans) => {
  let newEntry = "";
  let newResult = result ? result : "";
  if ((input === "." && entry.includes("."))
    || (entry === "0" && input === "0")
    || (input === "neg" && entry === "0")
    || (input === "neg" && !entry)
    || (/[+/*-]/.test(input) && !entry && !result)
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
  if (/[()]/.test(entry) && /[0-9]/.test(input)) newEntry = entry.slice(0,-1) + input + ")";
  if (/[+/*-]/.test(input) && entry && !result) {
    newResult = `${entry} ${input}`;
  } else if (/[+/*-]/.test(input) && entry && result) {
    newResult = `${result} ${entry} ${input}`;
  } else if (/[+/*-]/.test(input) && !entry && result) {
    newResult = `${result.toString().slice(0,-1)}${input}`;
  }

  return [newEntry, newResult];
}

export default entryValidation;
