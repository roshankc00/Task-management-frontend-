import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [show, setshow] = useState(false)
    const handleClick=()=>{
        setshow(!show)
    }
  return (

    <>
    
    <Wrapper>

        <Logo src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sNTDH0mjW6r7YH7XID92wLyRSkBOMe6rip8zjdc&s'>
             
        </Logo>
        <Container>
            <Navitem to='/'>Home</Navitem>
            <Navitem to='/about'>About</Navitem>
            <Navitem to='/about'>Login</Navitem>
            <Navitem to='/about'>Signup</Navitem>
            
 
        </Container>
{!show?

        <Button  onClick={handleClick}>
 <MenuIcon/>  
        </Button>
        :
           ""
}
    </Wrapper>
    {show?

        <Sidebar>
       <Navitem to='/'>Home</Navitem>
       
            <Navitem to='/about'>About</Navitem>
            <Navitem to='/about'>Login</Navitem>
            <Navitem to='/about'>Signup</Navitem>
      
       </Sidebar>:""
    }
       </>
  )
}

export default Navbar
const Wrapper=styled.nav`
font-family: 'Montserrat', sans-serif;
display: flex;
align-items: center;
gap: 10%;
overflow-x: hidden;
position: relative;
width: 100%;

background-color: black;
padding: 20px;
`
const Logo=styled.img`
    height: 80px;
    width: 100px;
`

const Container=styled.div`
display: flex;
gap: 50px;
margin-left: 100px;

@media  (max-width:700px) {
    display: none;
    
}
    
`
const Navitem=styled(Link)`
text-decoration: none;
color: white;
    
`

const Sidebar=styled.div`
position: absolute;
display: flex;
flex-direction: column;
gap: 100px;
right: 10px;
top: 10px;
border-bottom: 1px solid black;
color: black;
background-color: gray;
justify-content: center;
align-items: center;
font-weight: bolder;
width: 50%;
height: 80%;
z-index: 100;

    
`
const Button=styled.button`
z-index: 200;
    
`