import React from 'react'
import TodoContext from './todocontext'
const TodoState = (props) => {
    const state={
        name:"roshan",
        class:23
    }
  return (
    <TodoContext.Provider value={state}>
        {props.children}
    </TodoContext.Provider>


  )
}

export default TodoState

