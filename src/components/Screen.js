import "./Screen.css"

const Screen = ({ onEntryChange, entry }) => {
  return (
    <form type="submit">
      <textarea id="result" name="result" disabled>abs</textarea>
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
