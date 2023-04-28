import React from 'react'
import AuthContext from './authContext'
const AuthenticationState = (props) => {
  
const signinUser=async(name,email,password)=>{
    const response=await fetch('http://localhost:8080/api/auth/signin',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
      body:JSON.stringify({name,email,password})
    })
    const json=await response.json()
    console.log(json.token);
    localStorage.setItem('token',json.token)
}

const loginUser=async(email,password)=>{
    const response=await fetch('http://localhost:8080/api/auth/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    })
    const json=await response.json()
    console.log("login");
    localStorage.setItem('token',json.token)


}
 

  return (
    <AuthContext.Provider value={{signinUser,loginUser}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthenticationState 



