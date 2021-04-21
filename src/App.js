import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import React, { useState } from 'react';


function App() {


  let [todos, setTodos] = useState([]);

  function handleTask(newObj){
    let newTodos = [...todos];
    newTodos.push(newObj)
    setTodos(newTodos)
  }

  function changeStatus(id){
    let newTodos = todos.map(item =>{
      if(item.id === id){
        item.status = !item.status
      }
      return item
    })
    setTodos(newTodos)
  
  }




  function handleDelete(id){
    let newTodos = todos.filter(item =>{
      return item.id !== id
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      
      <AddTodo 
        handleTask={handleTask}
    
      />
      <TodoList 
        todos={todos}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        
      />

    </div>
  );
}

export default App;
