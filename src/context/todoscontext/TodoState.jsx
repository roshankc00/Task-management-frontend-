import React, { useState } from "react";
import TodoContext from "./todocontext";
const TodoState = (props) => {
    const [todo, settodo] = useState([])
  const state = {
    name: "roshan",
    class: 23,
  };
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

  const updateTheTodo = () => {
    console.log("sucessfully updated");
  };
  const deleteTheTodo = () => {
    console.log("deleted the todos");
  };
  const addTodo = () => {
    console.log("added sucess fully");
  };

  return (
    <TodoContext.Provider
      value={{ todo, getAllTodos, addTodo, deleteTheTodo,updateTheTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
