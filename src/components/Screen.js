import "./Screen.css"

const Screen = ({ onEntryChange, onCalculate, entry, result }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    onCalculate();
  }

  return (
    <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
      <textarea id="result" name="result" value={result}disabled />
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
