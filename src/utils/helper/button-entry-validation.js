const buttonEntryValidation = (button, entry, result) => {
  console.log([button, entry, result]);
  let newEntry = "";
  let newResult = result ? result : "";
  if ((button === "." && entry.includes("."))
    || (entry === "0" && button === "0")
    || (button === "neg" && entry === "0")
    || (button === "neg" && !entry)
    || (/[\+÷x-]/.test(button) && !entry && !result)
  ) return;
  if (/[0-9]/.test(button)) newEntry = entry + button;
  if (/[1-9]/.test(button) && entry === "0") newEntry = button;
  if ((button === "." && entry === "0")
    || (button === "." && !entry)
    ) {
      newEntry = "0.";
    } else if (button === "." && entry !== "0") {
      newEntry = entry + button;
    }
  if (button === "neg" && entry !== "0" && !/-/.test(entry)) {
    newEntry = `(-${entry})`;
  } else if (button === "neg" && entry !== "0" && /-/.test(entry)) {
    newEntry = entry.replace(/[()-]/g,"");
  }
  if (/[()]/.test(entry) && /[0-9]/.test(button)) newEntry = entry.slice(0,-1) + button + ")";
  if (/[\+÷x-]/.test(button) && entry && !result) {
    newResult = `${entry} ${button}`;
  } else if (/[\+÷x-]/.test(button) && entry && result) {
    newResult = `${result} ${entry} ${button}`;
  } else if (/[\+÷x-]/.test(button) && !entry && result) {
    newResult = `${result.slice(0,-2)} ${button}`;
  }

  return [newEntry, newResult];
}

export default buttonEntryValidation;