const UPDATE_NEW_TASK = 'UPDATE_NEW_TASK';

let state = {
     tasks: [
        {id: 0, description: 'сходить в магазин', completed: false},
        {id: 1, description: 'позвонить', completed: false},
        {id: 2, description: 'покормить пса', completed: false},
        {id: 3, description: 'написать программу', completed: false},
        {id: 4, description: 'сделать уроки', completed: false},
    ]
};


export let addNewTask = (taskMessages) => {
    debugger;
    let newTask = {
        id: 1,
        description: taskMessages,
        completed: false
    };
    state.tasks.push(newTask);
    // rerenderApp()
}

export default state;