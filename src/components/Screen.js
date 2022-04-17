import React from "react";
import PropTypes from "prop-types";
import insertCommas from "../utils/helper/insert-commas";
import "./Screen.css";

const Screen = ({expression, ans }) => {
  const expressionWithCommas = (expression) => {
    return expression.split(" ").map(value => insertCommas(value)).join(" ");
  }

  return (
    <div className="mb-2" id="screen">
      <span>Ans = {insertCommas(ans)}</span>
      <span>{expressionWithCommas(expression)}</span>
    </div>
  );
};

Screen.propTypes = {
  expression: PropTypes.string,
  ans: PropTypes.string,
}

export default Screen;
