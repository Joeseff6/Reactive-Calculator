import React, { useEffect } from "react";
import insertCommas from "../utils/helper/insert-commas";
import "./Screen.css";

const Screen = ({ onEntryChange, onCalculate, entry, result, ans }) => {
  useEffect(() => {
    document.getElementById("screen").focus();
  }, [entry,result]);
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
      <div className="mb-2 col" id="result">
          <span>
          Ans = {insertCommas(ans)}
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
