import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
    
    
   
    return (
        <ul className="todo-list">
           
           {props.todos.map((item, index)=>(
              
              <li key={item.id} className={item.status ? 'complated' : ''}>
                <input onChange={() => props.changeStatus(item.id)} type="checkbox"></input>  
                  {item.task}
              
              
              
              <button onClick={() => props.handleDelete(item.id)}>&times;</button>
              <button onClick={() => props.handleEdit(index)}>EDIT</button>
              </li>

           ))}
        </ul>
    );
};

export default TodoList;