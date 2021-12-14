import logo from "../../../src/logo.svg";
import Todo from "../Todo/Todo";
import { useSelector, useDispatch } from "react-redux";
import {
  completeTodo,
  addTodo,
  removeTodo,
  updateTodo,
} from "../../redux/action";
import TodoInput from "../TodoInput/TodoInput";
import "./TodoList.css";

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
    <div className="todolist">
      <img src={logo} className="todolist_logo" alt="logo" />
      <h1>Список задач: {state.todos.length}</h1>
      <TodoInput createTodo={create} />
      <ul>
        <div>
          {state.todos &&
            state.todos.map((todo) => {
              return (
                <div key={todo.id}>
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
        </div>
      </ul>
    </div>
  );
};

export default TodoList;