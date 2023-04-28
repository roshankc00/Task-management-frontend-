import React, { useState } from 'react'
import styled from 'styled-components'

const Signup = () => {
  const [login, setlogin] = useState({
    email:'',
    password:""
  })
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(login);
  }
const onChangeHandler=(e)=>{
  setlogin({...login,[e.target.name]:e.target.value})

}

  return (
    <>
    <Wrapper>
      <Formwaapper onSubmit={submitHandler}>
      <Header   > Login form</Header>
        <div>


        <input type='email' name='email' placeholder='enter the email' value={login.email} onChange={onChangeHandler}  minLength={10} required/>
        </div>
        <div>

        <input type='password' name='password' value={login.password} onChange={onChangeHandler} id='name'placeholder='enter the password' minLength={8} required />
        </div>
        <Button type='submit' className='btn' required>submit me </Button>


      </Formwaapper>


    </Wrapper>
    </>
  )
}

export default Signup

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
