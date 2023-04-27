import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './components/About'
import { Login } from '@mui/icons-material'
import Signup from './components/Signup'
import Signin from './components/Signin'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        
      </Routes>
      </BrowserRouter>
  )
}

export default App
