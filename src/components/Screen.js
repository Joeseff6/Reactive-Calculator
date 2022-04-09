import React, { useEffect } from "react";
import "./Screen.css";

const Screen = ({ onEntryChange, onCalculate, entry, result, ans }) => {
  useEffect(() => {
    document.getElementById("screen").focus();
  }, []);
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
      <div className="mb-2 col" id="result">
          <span>
          Ans = {ans}
          </span>
          <span>
          {result}
          </span> 
      </div>
      <input
        className="form-control"
        type="text"
        id="screen"
        name="screen"
        value={entry}
        onChange={(e) => onEntryChange(e)}
      />
    </form>
  );
};

export default Screen;
