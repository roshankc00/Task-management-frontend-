import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import todoContext from "../context/todoscontext/todocontext";

const UpdateTodos = () => {

    const {updateTheTodo}=useContext(todoContext)
  const [detail, setdetail] = useState({
    tag:"",
    title:"",
    description:""

  });
  const onChangeHandler=(e)=>{
    setdetail({...detail,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault()
    const task=updateTheTodo(detail.tag,detail.title,detail.description)

    navigate("/");
  };
  return (
    <Wapper>
      <FormWapper onSubmit={submitHandler}>
        <h1> Update the task </h1>
        <div>
          <input
            type="text"
            name="tag"
            placeholder="enter the tags"
            onChange={onChangeHandler}
            value={detail.tag}
            minLength={5}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={detail.title}
            onChange={onChangeHandler}
            placeholder="enter the title"
            minLength={5}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="enter the  description"
            rows={4}
            cols={20}
            value={detail.description}
            onChange={onChangeHandler}
            minLength={5}
            required
          />
        </div>
       
        <Button type="submit"> submit me </Button>
      </FormWapper>
    </Wapper>
  );
};

export default UpdateTodos;

const Wapper = styled.div`
  position: relative;
`;
const FormWapper = styled.form`
  border: 2px solid black;
  width: 350px;
  padding: 50px;
  margin: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const Button = styled.button`
  padding: 8px;
  background-color: #3f3fe6;
  color: white;
  font-size: 20px;
  margin-top: 10px;
`;
