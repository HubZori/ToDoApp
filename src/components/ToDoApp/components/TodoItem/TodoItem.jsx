import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../../../store/todoSlice";
import s from "./TodoItem.module.css";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.todoitem}>
      <div className={s.input}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodoComplete({ id }))}
        />
        <div className={s.itemspan}>{text}</div>
      </div>
      <span className={s.remove} onClick={() => dispatch(removeTodo({ id }))}>
        <DeleteOutlineIcon />
      </span>
    </li>
  );
};

export default TodoItem;
