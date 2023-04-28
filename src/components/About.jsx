import React, { useContext } from 'react'
import todoContext from '../context/todoscontext/todocontext'
const About = () => {
 const a=useContext(todoContext)
  return (
    <div>{a.name} and {a.class} </div>
  )
}

export default About