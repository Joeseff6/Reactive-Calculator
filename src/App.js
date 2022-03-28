import React, { useState } from "react";
import Screen from "./components/Screen";
import entryValidation from "./utils/helper/entry-validation";


import "./App.css";

function App() {
  const [ entry, setEntry ] = useState("123");
  const [ result, setResult ] = useState("asdf");

  const buttonArray = [
    "7", "8", "9", "÷",
    "4", "5", "6", "x",
    "1", "2", "3", "-",
    "0", ".", "(-)", "+"
  ];

  const onEntryChange = (e) => {
    const validatedString = entryValidation(e);
    setEntry(validatedString);
  }

  const onEntryButtonClick =(e) => {
    if (/^[\+-x÷]/.test(e.target.innerText)) {
      const newEntry = entry + " " + e.target.innerText + " ";
      setEntry(newEntry);
    } else {
      const newEntry = entry + e.target.innerText;
      setEntry(newEntry);
    }
  }

  const onClearAllClick = () => {
    setEntry("");
    setResult("");
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
              <Screen onEntryChange={onEntryChange} entry={entry} result={result}/>
            </div>
            <div className="row justify-content-center mt-4">
              {buttonArray.map(char => {
                return  <button className="btn entry-button" key={char} onClick={(e) => onEntryButtonClick(e)}>{char}</button>
              })}
            </div>
            <div className="row justify-content-center">
              <button className="btn enter-button">Calculate</button>
              <button className="btn btn-warning clear-entry-button" onClick={() => setEntry("")}>Clear Entry</button>
              <button className="btn btn-danger clear-all-button" onClick={onClearAllClick}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
