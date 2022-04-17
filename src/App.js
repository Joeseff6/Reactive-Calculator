import React, { useState, useEffect } from "react";
import Screen from "./components/Screen";
import calculate from "./utils/helper/calculate";
import updateValues from "./utils/helper/update-values";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insertCommas from "./utils/helper/insert-commas";
import "./App.css";

function App() {
  const [entry, setEntry] = useState("");
  const [expression, setExpression] = useState("");
  const [ans, setAns] = useState("0");

  useEffect(() => {
    document.getElementById("entry").focus();
  }, [entry, expression, ans]);

  const calculatorSize = {
    vertical: {
      width: "400px",
      height: "600px",
    },
  };

  const buttonArray = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "neg",
    "+",
  ];

  const onEntryChange = (e) => {
    let input = "";
    if (e.target.localName === "button") input = e.target.innerText;
    if (e.target.localName === "input") {
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        let updatedEntry = "";
        updatedEntry = /[()-]/.test(entry) ? entry.slice(0,-2) + ")" : entry.slice(0,-1);
        if (updatedEntry === "(-)") {
          setEntry("");
        } else {
          setEntry(updatedEntry);
        }
        return;
      }
      if (/[0-9+*/.-]/.test(e.nativeEvent.data)) {
        input = e.nativeEvent.data;
      }
    }
    const [updatedEntry, updatedExpression] = updateValues(input, entry, expression, ans)
    if (!updatedEntry && !updatedExpression) return;
    setEntry(updatedEntry);
    setExpression(updatedExpression);
  };

  const onClearAllClick = () => {
    setEntry("");
    setExpression("");
    setAns("0");
  };

  const onCalculate = () => {
    try {
      if (entry && !expression) {
        let formattedEntry = entry.replace(/[()]/g, "");
        if (/\.(?![\d)])/.test(formattedEntry)) formattedEntry = formattedEntry.replace(".", "");
        setAns(formattedEntry);
        setEntry("");
        return;
      }
      let stringToCalculate = entry && expression ? `${expression} ${entry}` : expression.slice(0, -2);
      const result = calculate(stringToCalculate);
      setEntry("");
      setExpression("");
      /\./.test(result)
        ? setAns(result.toFixed(2))
        : setAns(result.toString());
    } catch (err) {
      console.log(err);
      setExpression("Err");
      setEntry("");
    }
  };

  const onBackspaceClick = () => {
    if (/[()]/.test(entry)) {
      setEntry(entry.slice(0, -2) + ")");
    } else {
      setEntry(entry.slice(0, -1));
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

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
              <Screen
                onEntryChange={onEntryChange}
                onCalculate={onCalculate}
                entry={entry}
                expression={expression}
                ans={ans}
              />
            </div>
            <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
              <input
                className="form-control m-auto"
                type="text"
                id="entry"
                name="entry"
                value={entry}
                onChange={(e) => onEntryChange(e)}
              />
            </form>
            <div className="row justify-content-center">
              <button
                className="btn backspace-button mt-3 mx-3"
                onClick={() => onBackspaceClick()}
              >
                <FontAwesomeIcon icon={faDeleteLeft} />
              </button>
              <button
                className="btn ans-button mt-3 mx-3"
                onClick={() => setEntry(ans)}
              >
                Ans
              </button>
            </div>
            <div className="row justify-content-center mt-2">
              {buttonArray.map((char) => {
                return (
                  <button
                    className="btn entry-button"
                    key={char}
                    onClick={(e) => onEntryChange(e)}
                  >
                    {char}
                  </button>
                );
              })}
            </div>
            <div className="row justify-content-center">
              <button
                className="btn enter-button"
                onClick={() => onCalculate()}
              >
                Calculate
              </button>
              <button
                className="btn btn-warning clear-entry-button"
                onClick={() => setEntry("")}
              >
                Clear Entry
              </button>
              <button
                className="btn btn-danger clear-all-button"
                onClick={onClearAllClick}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
