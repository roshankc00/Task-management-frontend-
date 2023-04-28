import React, { useContext, useEffect } from 'react'
import todoContext from '../context/todoscontext/todocontext'
const About = () => {
 const {state,getAllTodos,addTodo,deleteTheTodo}=useContext(todoContext)
 useEffect(()=>{
  addTodo()
  deleteTheTodo()
 })
  return (
    <div>{state.name} and {state.class} </div>
  )
}

export default About