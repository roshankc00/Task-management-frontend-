import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const About = () => {
  const navigate=useNavigate()
  useEffect(()=>{

    if(localStorage.getItem('token')){
      
    }else{
      navigate('/')
    }
  })
  return (
    
    <div>
    {localStorage.getItem('token') &&
      <h1> This is about</h1>
    }
    </div>
  )
}

export default About 