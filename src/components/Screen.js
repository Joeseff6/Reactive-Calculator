import React, { useEffect } from "react";
import PropTypes from "prop-types";
import insertCommas from "../utils/helper/insert-commas";
import "./Screen.css";

const Screen = ({expression, ans }) => {
  useEffect(() => {
    document.getElementById("screen").focus();
  }, [expression]);

  console.log(expression)

  return (
    <div className="mb-2" id="screen">
      <span>Ans = {insertCommas(ans)}</span>
      <span>{expression.split(" ").map(string => insertCommas(string)).join(" ")}</span>
    </div>
  );
};

Screen.propTypes = {
  expression: PropTypes.string,
  ans: PropTypes.string,
}

export default Screen;
