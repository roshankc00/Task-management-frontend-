import React, { useState } from "react";
import TodoContext from "./todocontext";
const TodoState = (props) => {
    const [todo, settodo] = useState([])
    const state={}
  
    // get aall the todos 
  const getAllTodos = async() => {
    const response = await fetch('http://localhost:8080/api/todos/getalltodos',{
        method:"GET",
        headers:{
            "auth-token":localStorage.getItem('token')
        },
    })
    const json=await response.json()
    // console.log(json.todos);
    settodo(json.todos)
    console.log(json);

  };
 
//   update the todos
  const updateTheTodo =async(tag,title,description) => {
    console.log(state.id);
    const response= await fetch(`http://localhost:8080/api/todos/updatetodos/${state.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({tag,title,description})
    })
    const json=await response.json()
    console.log(json);
  };


// delete the todos
  const deleteTheTodo = async(id) => {
    console.log(id);
    const response =await fetch(`http://localhost:8080/api/todos/deletetodos/${id}`,{
        method:"DELETE",
        headers:{
            "auth-token":localStorage.getItem('token')


        }
    })
    const json=await response.json()
    console.log(localStorage.getItem("token"));
    const newTodo=todo.filter((item)=>item._id!=id)
    settodo(newTodo)
  };


               //   add todos 
  const addTodo = async (tag,title,description) => {
    console.log(localStorage.getItem('token'));
    const response=await fetch('http://localhost:8080/api/todos/addtodos',{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
       "auth-token":localStorage.getItem('token')
        },
      body: JSON.stringify({ title, description, tag }),
    })
    const json=await response.json()
    console.log(json);
    settodo(todo.concat(json))
    
  };
   
const getupdatedId=(id)=>{
    if(id){
        state.id=id
    }
    console.log(id);
    console.log(state.id);

  }





  return (
    <TodoContext.Provider
      value={{ todo, getAllTodos, addTodo, deleteTheTodo,updateTheTodo,getupdatedId }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
