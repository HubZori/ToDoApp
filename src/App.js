import {useState} from 'react'
import  ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import './App.css';
import logo from './logo.svg'
import {useSelector} from 'react-redux';


function App() {
    const state = useSelector((state) => ({...state}));
    console.log('state', state);
    return(
        <div className='App'>
            <h2>State</h2>
        </div>
    );
}

export default App;

/* function App() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9), task: userInput, complete: false
            }
            setTodos([...todos, newItem])
        }
    }
    const deleteTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])

    }
    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete} : {...todo }
            )
        ])

    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Список задач: {todos.length}</h1>
                <ToDoForm addTask={addTask}/>
                {todos.map((todo) => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            toggletask={handleToggle}
                            deletetask={deleteTask}
                        />
                    )
                })}
            </header>
        </div>
    );
} */
