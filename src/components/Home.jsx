import React, { useContext, useEffect } from 'react'
import Todos from './Todos'
import styled from 'styled-components'
import todoContext from '../context/todoscontext/todocontext'
import Addtodos from './Addtodos'
import { useNavigate } from 'react-router-dom'
import Signin from './Signin'
const Home = () => {
  const navigate=useNavigate()
  if(localStorage.getItem('token')){

  }else{
    navigate('/signin')
  }

  const {todo,getAllTodos,deleteTheTodo}=useContext(todoContext)
  useEffect(()=>{
    if(localStorage.getItem('token')){

      getAllTodos()
    }
    else{
      navigate('/signin')
    }

  },[])
  return (
    <>

    <div>
    <div>
      <Addtodos/>
    </div>
    <Wrapper>
      {
        todo.map((item)=>{
          return <Todos key={item._id} todo={item} title={item.title} description={item.description} tag={item.tag} />
        })
      }
    </Wrapper>
      </div>
      </>
  )
}

export default Home

const Wrapper=styled.div `
padding: auto;
margin: auto;
position: absolute;

left: 50%;
top: 80%;
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