import React from 'react'
import Todos from './Todos'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <Todos/>
      <Todos/>
      <Todos/>
      <Todos/>
      <Todos/>
      <Todos/>
      <Todos/>
      <Todos/>
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