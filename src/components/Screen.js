import React, { useState } from "react";
import inputValidation from "../utils/helper/input-validation";
import "./Screen.css"

const Screen = () => {
  const [ input, setInput ] = useState("");

  const onInputChange = (e) => {
    const validatedString = inputValidation(e.target.value);
    setInput(validatedString);
  }

  return (
    <form type="submit">
      <input
        className="form-control"
        type="text"
        id="screen"
        name="screen"
        value={input}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

export default Screen;
