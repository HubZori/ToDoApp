import React, { useState } from "react";
import s from "./TodoInput.module.css";

const TodoInput = ({ createTodo }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      handleSubmit(e);
    } else if (e.key === "Enter" && !e.target.value !== "") {
      e.preventDefault();
    }
  };

  return (
    <form className={s.todoInputForm} onSubmit={handleSubmit}>
      <textarea
        id="task"
        name="task"
        type="text"
        value={task}
        maxLength="50"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="какие планы"
      />
      <button disabled={!task}>добавить</button>
    </form>
  );
};

export default TodoInput;