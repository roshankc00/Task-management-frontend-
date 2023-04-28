import React, { useContext, useState } from "react";
import styled from "styled-components";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import todoContext from "../context/todoscontext/todocontext";
import { useNavigate } from "react-router-dom";


const Todos = (props) => {
  const navigate=useNavigate()
  const {deleteTheTodo,getupdatedId}=useContext(todoContext)
  const handleDelete=()=>{
deleteTheTodo(props.todo._id)
  }
  const handleUpdate=()=>{
    navigate('/updateme')
    getupdatedId(props.todo._id)
    

    
  }
  return (
    <Container>
      <Card>
        <Tag>{props.tag}</Tag>
        <Title>{props.title}</Title>
        <Description> {props.description}</Description>
        <IconWapper>

      <button onClick={handleDelete}><AutoDeleteIcon/> </button>
      <button onClick={handleUpdate}> <EditIcon/> </button>
        </IconWapper>

      </Card>

    </Container>
  );
};

export default Todos;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
`;

const Card = styled.div`
  /* background-color: red; */
  max-height: 800px;
  width: 200px;
  padding-bottom:20px;
  position: relative;
  background: url("https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg");
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: transform 250ms;
  &:hover {
    transform: scale(1.05);
  }
`;
const Title = styled.h6`
  padding: 0px 10px;
  color: yellow;
  font-weight: 300;
  margin-top: 60px;
  background:cover;
`;
const Description = styled.div`
  padding: 0 10px;
  font-size: 15px;
  font-weight: 900;
  width: 150px;
  color: orange;
`;
const Tag = styled.div`
  position: absolute;
  right: 0;
  padding: 8px;
  color: white;
  background-color: blue;
  border-bottom-left-radius: 10px;
`;
const IconWapper=styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 10px;
`