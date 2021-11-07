import logo from './logo.svg';
import './App.css';
import ToDoItem from "./ToDoItem/ToDoItem";
import todoData from "./todosData";

function App() {
    const handleChange = (id) => {
        console.log('значение поменялось', id);
    }
    const todoItems = todoData.map(item => {
        return (
            <ToDoItem
                key={item.id}
                description={item.description}
                complited={item.completed}
                handleChange={()=>{handleChange(item.id)}}
            />
        )
    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {todoItems}
            </header>
        </div>
    );
}

export default App;
