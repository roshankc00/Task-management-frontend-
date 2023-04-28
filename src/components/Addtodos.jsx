import React from 'react'
import styled from 'styled-components'

const Addtodos = () => {
  return (
    <Wapper>
        <FormWapper>
            <div>
                <input type='text' name='title'placeholder='enter the title'/>
            </div>
            <div>
                <textarea  name='description' placeholder='enter the  description' rows={4} cols={20}/>
            </div>
            <div>
                <input type='text' name='tag' placeholder='enter the tags'/>
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

    
`
const Button =styled.button`
padding: 8px;
background-color: #3f3fe6;
color: white;
font-size: 20px;
margin-top:10px ;
    
`