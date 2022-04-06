import "./Screen.css";

const Screen = ({ onEntryChange, onCalculate, entry, result, ans }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
      <div className="mb-2 col" id="result">
          <span>
          Ans = {ans}
          </span>
          <span>
          {result ? result : "Time to calculate!"}
          </span> 
      </div>
      <input
        className="form-control"
        type="text"
        id="screen"
        name="screen"
        value={entry}
        onChange={(e) => onEntryChange(e)}
      />
    </form>
  );
};

export default Screen;
