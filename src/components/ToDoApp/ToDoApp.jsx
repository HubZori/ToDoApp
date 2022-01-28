import s from "./ToDoApp.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import logo from "../../img/logo.svg";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";

function ToDoApp() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className={s.todolistApp}>
      <img src={logo} className={s.applogo} alt="logo" />
      {/*       <h1>Список задач: {todos.length}</h1>
       */}{" "}
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default ToDoApp;
