import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./commponent/TodoList/TodoList";

function App() {
  const state = useSelector((state) => ({ ...state }));
  return (
    <div className="app">
      <TodoList state={state} />
    </div>
  );
}
export default App;
