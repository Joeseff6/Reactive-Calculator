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
  return updatedEntry;
}

export default newEntry;