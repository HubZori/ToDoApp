import logo from "../logo.svg";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";
import TodoInput from "./TodoInput";
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
    <div className="TodoList">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Список задач: {state.todos.length}</h1>
      <TodoInput createTodo={create} />
      <ul>
        <div className="todo=list">
          {state.todos &&
            state.todos.map((todo) => {
              return (
                <div key={todo.id} className="todo">
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
