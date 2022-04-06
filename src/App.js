import React, { useState } from "react";
import Screen from "./components/Screen";
import calculate from "./utils/helper/calculate";
import entryValidation from "./utils/helper/entry-validation";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";


function App() {
  const [ entry, setEntry ] = useState("");
  const [ result, setResult ] = useState("");
  const [ ans, setAns ] = useState(0);

  const calculatorSize = {
    vertical: {
      width: "400px",
      height: "600px",
    }
  }

  const buttonArray = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "neg", "+"
  ];

  const onEntryChange = (e) => {
    let newEntry = "", newResult = "";
    if (e.target.localName === "button") {
      const button = e.target.innerText;
      [newEntry, newResult] = entryValidation(button, entry, result, ans);
    }
    if (e.target.localName === "input") {
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        setEntry(entry.slice(0,-1));
        return;
      }
      let key = "";
      if (!/[^0-9+*/.-]/.test(e.nativeEvent.data)) {
        key = e.nativeEvent.data;
      } else {
        return;
      }
      [newEntry, newResult] = entryValidation(key, entry, result, ans);
    }
    if (!newEntry && !newResult) return;
    setEntry(newEntry);
    setResult(newResult);
  }

  const onClearAllClick = () => {
    setEntry("");
    setResult("");
    setAns("0");
  }

  const onCalculate = () => {
    try {
      let stringToBeCalculated = "";
      if (entry) {
        stringToBeCalculated = `${result} ${entry}`;
      } else {
        stringToBeCalculated = result.slice(0,-2);
      }
      const finalResult = calculate(stringToBeCalculated);
      setEntry("");
      setResult("");
      /\./.test(finalResult) ? setAns(finalResult.toFixed(2)) : setAns(finalResult.toString());
    } catch(err) {
      console.log(err)
      setResult("Err");
      setEntry("");
    }
  }

  const onBackspaceClick = () => {
    if (/[()]/.test(entry)) {
      setEntry(entry.slice(0,-2) + ")");
    } else {
      setEntry(entry.slice(0,-1));
    }
  }

  return (
    <div className="container-fluid">
      <div className="row mt-5 justify-content-center">
        <div className="main-background" style={calculatorSize.vertical}>
          <div className="secondary-background">
            <div className="row">
              <div className="col">
                <h6 className="text-center calculator-model mt-2">
                  Reactive Calculator v1.0
                </h6>
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <Screen onEntryChange={onEntryChange} onCalculate={onCalculate} entry={entry} result={result} ans={ans}/>
            </div>
            <div className="row justify-content-center">
              <button className="btn backspace-button mt-3 mx-3" onClick={() => onBackspaceClick()}>
                <FontAwesomeIcon icon={faDeleteLeft} />
              </button>
              <button className="btn ans-button mt-3 mx-3" onClick={() => setEntry(ans)}>
                Ans
              </button>
            </div>
            <div className="row justify-content-center mt-2">
              {buttonArray.map(char => {
                return  <button className="btn entry-button" key={char} onClick={(e) => onEntryChange(e)}>{char}</button>
              })}
            </div>
            <div className="row justify-content-center">
              <button className="btn enter-button" onClick={() => onCalculate()}>Calculate</button>
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
