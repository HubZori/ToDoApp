import React, { useState } from "react";
import "./Todo.css";
//import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

//

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEdit(false);
  };

  return (
    <div className={completed ? "Todo completed" : "Todo"}>
      {isEdit ? (
        <div key="edit" timeout={500} className="form">
          <form className="Todo-edit-from" onSubmit={handleUpdate}>
            <input
              type="text"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <button>сохранить</button>
          </form>
        </div>
      ) : (
        <div key="normal" timeout={500} className="task-text">
          <li className="Todo-task" onClick={toggleTodo}>
            {task}
          </li>
        </div>
      )}

      <div className="Todo-buttons">
        <div className="EditeTask" onClick={() => setIsEdit(true)}>
          редактировать
        </div>
        <div className="RemoveTask" onClick={removeTodo}>
          удалить
        </div>
      </div>
    </div>
  );
};

export default Todo;
