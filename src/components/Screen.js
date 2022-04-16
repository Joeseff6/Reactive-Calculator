import React, { useEffect } from "react";
import PropTypes from "prop-types";
import insertCommas from "../utils/helper/insert-commas";
import "./Screen.css";

const Screen = ({expression, ans }) => {
  useEffect(() => {
    document.getElementById("screen").focus();
  }, [expression]);

  return (
    <div className="mb-2" id="screen">
      <span>Ans = {(ans)}</span>
      <span>{expression}</span>
    </div>
  );
};

Screen.propTypes = {
  expression: PropTypes.string,
  ans: PropTypes.string,
}

export default Screen;
