import React, { useState } from 'react';

const AddTodo = (props) => {
    const [task, setTask] = useState('')
    const handleInput = (event) => {
        setTask(event.target.value)
    }

    const handleAdd = () => {
        const newTask = {
            task,
            status: false,
            id: Date.now()
        }
        props.handleTask(newTask)
        setTask('')
    }

    return (
        <>
            <input value={task} onChange={handleInput} type="text" placeholder="Add task"/>
            <button onClick={handleAdd}>Add</button>
        </>
    );
};

export default AddTodo;