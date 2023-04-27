import React from "react";
import styled from "styled-components";
const Todos = () => {
  return (
    <Container>
      <Card>
        <Tag>vlogjjjj</Tag>
        <Title>hello how are youssxxxxxx</Title>
        <Description> iam fine </Description>
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
  height: 200px;
  width: 200px;
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
const Title = styled.div`
  padding: 2px 10px;
  color: yellow;
  font-weight: 300;
`;
const Description = styled.div`
  padding: 2px 10px;
  font-size: 15px;
  font-weight: 900;
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
