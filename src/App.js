import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import React, { useState } from 'react';
import EditModal from "./components/EditModal/EditModal";


function App() {


  let [todos, setTodos] = useState([]);
  let [modal, setModal] = useState(false)
  let [editTodo, setEditTodo] = useState({})

  function handleTask(newObj){
    let newTodos = [...todos];
    newTodos.push(newObj)
    setTodos(newTodos)
  }


  function handleEdit(index){
    setModal(true)
    setEditTodo(todos[index])
   
   
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

  function handleSaveTask(newTask){
    let newTodos = todos.map(item =>{
      if(item.id === newTask.id){
        return newTask
      }
      return item
    })
    setTodos(newTodos)
    setModal(false)
  }

  function handleCloseModal(){
    setModal(false)
    alert("вы ничего не изменили")
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
        handleEdit={handleEdit}
        
      />
      {modal ?  
        <EditModal
          editTodo={editTodo}
          handleSaveTask={handleSaveTask}
          handleCloseModal={handleCloseModal}
        /> 
        
        
        : null }
     

    </div>
  );
}

export default App;
