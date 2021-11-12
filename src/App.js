import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from "./ToDoItem/ToDoItem";
import state from "./state";


class App extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: state.tasks
        }
    }

    handleChange = (id) => {
        const index = this.state.todoItems.map(item => item.id).indexOf(id);
        this.setState(state => {
            let {todoItems} = state;
            todoItems[index].completed = true;
            return todoItems;
        })
    }

    render() {

        const {todoItems} = this.state;
        const activeTasks = todoItems.filter(task => task.completed === false)
        const completedTasks = todoItems.filter(task => task.completed === true)
        const finalTasks = [...activeTasks, ...completedTasks].map(item => {
            return (
                <ToDoItem
                    key={item.id}
                    description={item.description}
                    completed={item.completed}
                    handleChange={() => {
                        this.handleChange(item.id)
                    }}
                />
            )
        })

        let newTaskMessage = React.createRef();

       // addNewTask={this.props.addNewTask}
        let addTask = () => {
            debugger;
            let text = newTaskMessage.current.value;
            this.props.addtask(text);
        };



        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="title">ПЛАНЫ НА ДЕНЬ</h1>
                    <h2 className="titleBlock">Задачи</h2>
                    <div>
                        <textarea ref={newTaskMessage} placeholder='какие планы?'/>
                    </div>
                    <div>
                        <button onClick={addTask}>add task</button>
                    </div>

                    {finalTasks}
                </header>

            </div>
        );
    }
}


export default App;
