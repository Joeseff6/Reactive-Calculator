const buttonEntryValidation = (button, entry, result) => {
  console.log([button, entry, result]);
  let newEntry = "";
  let newResult = "";
  if ((button === "." && entry.includes("."))
    || (entry === "0" && button === "0")
    || (button === "neg" && entry === "0")
    || (button === "neg" && !entry)
    || (/[\+÷x-]/g.test(button) && !entry && !result)
  ) return;
}

export default buttonEntryValidation;