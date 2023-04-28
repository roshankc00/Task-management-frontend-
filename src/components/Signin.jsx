import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import authContext from '../context/authContext/authContext'

const Signin = () => {
  const {signinUser}=useContext(authContext)
  const [auth, setauth] = useState({
    name:"",
    email:"",
    password:""
  })   
  const submitHandler=(e)=>{
    e.preventDefault()
    signinUser(auth.name,auth.email,auth.password)

    
  }
  const onChangeHandler=(e)=>{
    
    setauth({...auth,[e.target.name]:e.target.value})
  }
  return (
    <>
    <Wrapper>
      <Formwaapper onSubmit ={submitHandler}>
      <Header> Signin form </Header>
        <div>

        <input type='text' name='name' id='name'placeholder='enter the name' value={auth.name} onChange={onChangeHandler} required/>
        </div>
        <div>

        <input type='email' name='email' id='name'placeholder='enter the email' value={auth.email} onChange={onChangeHandler} required/>
        </div>
        <div>

        <input type='password' name='password' id='name'placeholder='enter the password' value={auth.password}  onChange={onChangeHandler} required/>
        </div>
        <Button type='submit' className='btn' >submit me </Button>


      </Formwaapper>


    </Wrapper>
    </>
  )
}

export default Signin

const Wrapper=styled.div`
position: relative;
  
`
const Formwaapper=styled.form`
display: flex;
flex-direction: column;
margin-top: 60px;
border: 2px solid black;
max-width: 300px;
padding: 60px;
position: absolute;
left: 50%;
transform: translateX(-50%);


  


`

const Button=styled.button`
padding:8px 10px;
font-size: 20px;
width: 150px;
margin-top: 10px;
background-color: black;
color: white;

`

const Header=styled.h1`
  text-align: center;
`
