import React, { useState } from "react";
import Screen from "./components/Screen";
import entryValidation from "./utils/helper/entry-validation";


import "./App.css";

function App() {
  const [ entry, setEntry ] = useState("");
  const [ result, setResult ] = useState("");

  const buttonArray = [
    "7", "8", "9", "÷",
    "4", "5", "6", "x",
    "1", "2", "3", "-",
    "0", ".", "neg", "+"
  ];

  const onEntryChange = (e) => {
    if (e.target.localName === "button") {
      const button = e.target.innerText;

      if (/[\+x÷-]/g.test(button) && entry) {
        if (result) {
          setResult(`${result} ${entry} ${button}`);
        } else {
          setResult(`${entry} ${button}`);
        }
        setEntry("");
        return;
      }

      let newEntry = "";
      if (button === "." && entry.includes(".")) return;
      if (button === "neg" && !/-/.test(entry)) {
        newEntry = entry === "0" ? "0" : `(-${entry})`;
      } else if (button === "neg" && /-/.test(entry)) {
        newEntry = entry.replace(/[()-]/g,"");
      } else {
        newEntry = entry + button;
      }

      if (newEntry[0] === "0" && newEntry[1] === "0") {
        setEntry("0");
      } else if (newEntry.length > 1 && newEntry[0] === "0" && newEntry[1] !== "0") {
        setEntry(newEntry.slice(1,-1));
      } else {
        setEntry(newEntry);
      }
    }


    if (e.target.localName === "input") {
      console.log("this is input")
    }
  }

  const onEntryButtonClick =(e) => {
    // if (/^[\+-x÷]/.test(e.target.innerText)) {
    //   const newEntry = entry + " " + e.target.innerText + " ";
    //   setEntry(newEntry);
    // } else {
    //   const newEntry = entry + e.target.innerText;
    //   setEntry(newEntry);
    // }
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
            <div className="btn backspace-button mt-2">
              <i className="fa-solid fa-delete-left"></i>
            </div>
            <div className="row justify-content-center mt-2">
              {buttonArray.map(char => {
                return  <button className="btn entry-button" key={char} onClick={(e) => onEntryChange(e)}>{char}</button>
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
