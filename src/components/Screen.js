import React, { useEffect } from "react";
import PropTypes from "prop-types";
import insertCommas from "../utils/helper/insert-commas";
import "./Screen.css";

const Screen = ({result, ans }) => {
  useEffect(() => {
    document.getElementById("screen").focus();
  }, [result]);

  console.log(typeof(result))

  return (
    <div className="mb-2" id="screen">
      <span>Ans = {insertCommas(ans)}</span>
      <span>{result}</span>
    </div>
  );
};

Screen.propTypes = {
  result: PropTypes.string,
  ans: PropTypes.string,
}

export default Screen;
