import "./Screen.css"

const Screen = ({ onInputChange, input }) => {
  return (
    <form type="submit">
      <input
        className="form-control"
        type="text"
        id="screen"
        name="screen"
        value={input}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

export default Screen;
