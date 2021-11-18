//import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';


function ToDo({todo, toggletask, deletetask}) {
    return (
        <div key={todo.id} className='item-todo'>
            <div
                className={todo.complete ? 'item-text strike' : 'item-text'}
                 onClick={() => toggletask(todo.id)}
            >
                {todo.task}
            </div>

            <div className='item-delete' onClick={() => deletetask(todo.id)}>
                x
            </div>

        </div>
    )
}

export default ToDo