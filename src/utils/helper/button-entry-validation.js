const buttonEntryValidation = (button, entry, result) => {
  console.log([button, entry, result]);
  let newEntry = "";
  let newResult = "";
  if ((button === "." && entry.includes("."))
    || (entry === "0" && button === "0")
    || (button === "neg" && entry === "0")
    || (button === "neg" && !entry)
    || (/[\+÷x-]/.test(button) && !entry && !result)
  ) return;
  if (/[0-9]/.test(button)) newEntry = entry + button;
  if ((button === "." && entry === "0")
    || (button === "." && !entry)
    ) newEntry = "0.";

  return [newEntry, newResult];
}

export default buttonEntryValidation;