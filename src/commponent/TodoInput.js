import {useState} from 'react'


function TodoInput = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(task)
        setTask('')

    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                id='task'
                name='task'
                type='text'
                value={task}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='какие планы'
            />
            <button>добавить</button>
        </form>
    )
}