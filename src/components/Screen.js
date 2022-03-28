import "./Screen.css"

const Screen = ({ onEntryChange, entry, result }) => {
  return (
    <form type="submit">
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
