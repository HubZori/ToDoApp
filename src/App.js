import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./commponent/TodoList/TodoList";

function App() {
  const state = useSelector((state) => ({ ...state }));
  console.log("state", state);
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}
export default App;
