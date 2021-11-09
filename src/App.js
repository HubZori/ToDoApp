import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from "./ToDoItem/ToDoItem";
import todoData from "./todosData";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: todoData
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
                        handleChange={() => {this.handleChange(item.id)}}
                    />
                )
        })
         return (
            <div className="App"> {/*
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                </header>*/}
                {finalTasks}
            </div>
        );
    }
}


export default App;
