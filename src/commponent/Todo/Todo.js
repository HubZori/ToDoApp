import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEdit(false);
  };

  return (
    <div className={completed ? "todo complated" : "todo"}>
      {isEdit ? (
        <div key="edit" timeout={500}>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <button disabled={!editTask}>сохранить</button>
          </form>
        </div>
      ) : (
        <div key="normal" timeout={500} className="todo_task">
          <input
            onClick={toggleTodo}
            type="checkbox"
            className="todo_task__input"
          />
          <div>{task}</div>
        </div>
      )}

      <div className="todo_buttons">
        <div className="todo_buttons__edit" onClick={() => setIsEdit(true)}>
          редактировать
        </div>
        <div className="todo_buttons__remove" onClick={removeTodo}>
          удалить
        </div>
      </div>
    </div>
  );
};

export default Todo;
