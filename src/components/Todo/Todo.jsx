import React, { useState } from "react";
import s from "./Todo.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEdit(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      updateTodo(id, editTask);
      setIsEdit(false);
    } else if (e.key === "Enter" && !e.target.value !== "") {
      e.preventDefault();
    }
  };

  return (
    <div className={completed ? s.todoComplated : s.todo}>
      {isEdit ? (
        <div key="edit" timeout={500}>
          {
            <form onSubmit={handleUpdate}>
              <textarea
                type="text"
                name="task"
                onKeyDown={handleKeyPress}
                value={editTask}
                maxLength="50"
                onChange={(e) => setEditTask(e.target.value)}
              />
              <button disabled={!editTask}>сохранить</button>
            </form>
          }
        </div>
      ) : (
        <div key="normal" timeout={500} className={s.todoTask}>
          <input
            onClick={toggleTodo}
            type="checkbox"
            className={s.todoTaskInput}
          />
          <div>{task}</div>
        </div>
      )}
      <div className={s.todoButtons}>
        <div className={s.todoButtonsEdit} onClick={() => setIsEdit(true)}>
          <EditIcon />
        </div>
        <div className={s.todoButtonsRemove} onClick={removeTodo}>
          <DeleteOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Todo;
