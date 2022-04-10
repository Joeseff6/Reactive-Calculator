import React, { useEffect } from "react";
import insertCommas from "../utils/helper/insert-commas";
import "./Screen.css";

const Screen = ({entry, result, ans }) => {
  useEffect(() => {
    document.getElementById("screen").focus();
  }, [entry, result]);

  return (
    <div className="mb-2" id="screen">
      <span>Ans = {insertCommas(ans)}</span>
      <span>{result}</span>
    </div>
  );
};

export default Screen;
