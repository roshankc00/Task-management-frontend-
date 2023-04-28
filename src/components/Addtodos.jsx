import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import todoContext from '../context/todoscontext/todocontext'

const Addtodos = () => {
    const {addTodo}=useContext(todoContext)
    const [todo, settodo] = useState({
        tag:"",
        title:"",
        description:""
    })
    const handleTodoSubmit=(e)=>{
        e.preventDefault()
           console.log("k xa  ");
           addTodo(todo.tag,todo.title,todo.description)
        console.log(todo);
    }
    const onChangeHandler=(e)=>{
        settodo({...todo,[e.target.name]:e.target.value})
    }

  return (
    <Wapper>
        <FormWapper onSubmit={handleTodoSubmit}>
            <h1 style={{textAlign:"center"}}> Add todos</h1>
        <div>
                <input type='text' name='tag' placeholder='enter the tags' value={todo.tag} onChange={onChangeHandler} maxLength={4} required/>
            </div>
            <div>
                <input type='text' name='title'placeholder='enter the title'value={todo.title} onChange={onChangeHandler} maxLength={5} required/>
            </div>
            <div>
                <textarea  name='description' placeholder='enter the  description' rows={4} cols={20} value={todo.description} maxLength={5} onChange={onChangeHandler} required/>
            </div>
           
            <Button type='submit'> submit me </Button>
        </FormWapper>
    </Wapper>
  )
}

export default Addtodos


const Wapper=styled.div`
position: relative;
`
const FormWapper=styled.form`
border: 2px solid black;
width: 350px;
padding: 50px;
margin: 50px;
position: absolute;
left: 50%;
transform: translateX(-50%);
overflow: hidden;

    
`
const Button =styled.button`
padding: 8px;
background-color: #3f3fe6;
color: white;
font-size: 20px;
margin-top:10px ;
    
`