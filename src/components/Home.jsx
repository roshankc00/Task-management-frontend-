import React, { useContext, useEffect } from 'react'
import Todos from './Todos'
import styled from 'styled-components'
import UpdateTodos from './UpdateTodos'
import todoContext from '../context/todoscontext/todocontext'

const Home = () => {
  const {todo,getAllTodos}=useContext(todoContext)
  useEffect(()=>{
    getAllTodos()
    // console.log("todo",todo);
    console.log("sds",todo);

  },[])
  return (
    <Wrapper>
      {
        todo.map((item)=>{
          return <Todos title={item._id} description={item.description} tag={item.tag}/>
       })
      }
    </Wrapper>
  )
}

export default Home

const Wrapper=styled.div `
padding: auto;
margin: auto;
position: absolute;
left: 50%;
transform: translateX(-50%);
gap: 20px;
display: grid;
grid-template-columns:auto auto auto auto auto auto;
@media (max-width:1320px){
  grid-template-columns:auto auto  auto auto auto;
  
}
@media (max-width:1080px){
  grid-template-columns:auto auto  auto  auto;
  
}
@media (max-width:885px){
  grid-template-columns:auto auto  auto  ;
  
}
@media (max-width:670px){
  grid-template-columns:auto auto  ;

  
}
@media (max-width:500px){
  grid-template-columns:auto;



  
}

  
`