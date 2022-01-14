import React, { useState } from "react";
import c from "./Todo.module.css";
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
    <div className={completed ? c.todoComplated : c.todo}>
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
        <div key="normal" timeout={500} className={c.todoTask}>
          <input
            onClick={toggleTodo}
            type="checkbox"
            className={c.todoTaskInput}
          />
          <div>{task}</div>
        </div>
      )}

      <div className={c.todoButtons}>
        <div className={c.todoButtonsEdit} onClick={() => setIsEdit(true)}>
          <EditIcon />
        </div>
        <div className={c.todoButtonsRemove} onClick={removeTodo}>
          <DeleteOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Todo;
