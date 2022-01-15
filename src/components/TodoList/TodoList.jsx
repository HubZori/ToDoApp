import logo from "../../../src/logo.svg";
import Todo from "../Todo/Todo.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  completeTodo,
  addTodo,
  removeTodo,
  updateTodo,
} from "../../redux/action";
import TodoInput from "../TodoInput/TodoInput.jsx";
import s from "./TodoList.module.css";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  let dispatch = useDispatch();
  const create = (newTodo) => {
    dispatch(addTodo(newTodo));
  };
  const update = (id, updateTask) => {
    dispatch(updateTodo({ id, updateTask }));
  };

  return (
    <div className={s.todolist}>
      <div>
        <img src={logo} className={s.todolistLogo} alt="logo" />
      </div>
      <h1>Список задач: {state.todos.length}</h1>
      <TodoInput createTodo={create} />
      <ul>
        {state.todos &&
          state.todos.map((todo) => {
            return (
              <div className={s.todolistWrap} key={todo.id}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  completed={todo.completed}
                  toggleTodo={() => dispatch(completeTodo(todo))}
                  removeTodo={() => dispatch(removeTodo(todo))}
                  updateTodo={update}
                />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
