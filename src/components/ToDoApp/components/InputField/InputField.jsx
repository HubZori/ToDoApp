import s from "./InputField.module.css";

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <div className={s.inputfiled}>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default InputField;
