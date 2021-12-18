import React, { useState } from "react";
import "./TodoInput.css";

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
    <form className="toDoInputForm" onSubmit={handleSubmit}>
      <textarea
        id="task"
        name="task"
        type="text"
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="какие планы"
      />
      <button disabled={!task}>добавить</button>
    </form>
  );
};

export default TodoInput;
