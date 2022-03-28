import React, { useState } from "react";
import Screen from "./components/Screen";
import InputButton from"./components/InputButton";
import inputValidation from "./utils/helper/input-validation";


import "./App.css";

function App() {
  const [ input, setInput ] = useState("");
  const [ result, setResult ] = useState("");

  const buttonArray = [
    "7", "8", "9", "÷",
    "4", "5", "6", "x",
    "1", "2", "3", "-",
    "0", ".", "(-)", "+"
  ];

  const onInputChange = (e) => {
    const validatedString = inputValidation(e);
    setInput(validatedString);
  }

  const onInputButtonClick =(e) => {
    if (/^[\+-x÷]/.test(e.target.innerText)) {
      const newInput = input + " " + e.target.innerText + " ";
      setInput(newInput);
    } else {
      const newInput = input + e.target.innerText;
      setInput(newInput);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row mt-5 justify-content-center">
        <div className="main-background">
          <div className="secondary-background">
            <div className="row">
              <div className="col">
                <h6 className="text-center calculator-model mt-2">
                  Reactive Calculator v1.0
                </h6>
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <Screen onInputChange={onInputChange} input={input}/>
            </div>
            <div className="row justify-content-center mt-4">
              {buttonArray.map(char => {
                return  <button className="btn input-button" key={char} onClick={(e) => onInputButtonClick(e)}>{char}</button>
              })}
            </div>
            <div className="row justify-content-center">
              <button className="btn enter-button">Calculate</button>
              <button className="btn btn-warning clear-entry-button">Clear Entry</button>
              <button className="btn btn-danger clear-all-button">Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
