import React from "react";
import TodoContext from "./todocontext";
const TodoState = (props) => {
  const state = {
    name: "roshan",
    class: 23,
  };
  const getAllTodos = async(title,description,tag) => {
    const response = await fetch('http://localhost:8080/api/todos/getalltodos',{
        method:"GET",
        headers:{
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGEwZWZhMDI0NWNkYjM2NmZjN2UyNCIsImlhdCI6MTY4MjU3NTA5OH0.4BP8wm1X9lg8lggVTs4sv6pbvSRh94R2Qbp7HJ_0YNM"
        }
    })
    const json=await response.json()
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
      value={{ state, getAllTodos, addTodo, deleteTheTodo,updateTheTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
