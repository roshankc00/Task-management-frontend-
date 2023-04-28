import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const handleClick = () => {
    setshow(!show);
  };
  return (
    <>
      <Wrapper>
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sNTDH0mjW6r7YH7XID92wLyRSkBOMe6rip8zjdc&s"></Logo>
        <Container>
          <Navitem to="/">Home</Navitem>
          <Navitem to="/about">About</Navitem>
          <Navitem to="/login">Login</Navitem>
          <Navitem to="/signin">Signin</Navitem>
        </Container>
        {!show ? (
          <Button onClick={handleClick}>
            <MenuIcon />
          </Button>
        ) : (
          ""
          )}
      </Wrapper>
      {show ? (
        <Sidebar>
          <SideButton onClick={handleClick}>
          <CloseIcon/>
          </SideButton>

          <Navitem to="/">Home</Navitem>
          <Navitem to="/about">About</Navitem>
          <Navitem to="/login">Login</Navitem>
          <Navitem to="/signin">Signin</Navitem>
        </Sidebar>
      ) : (
        ""
        )}
    </>
  );
};

export default Navbar;










const Wrapper = styled.nav`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  gap: 10%;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  background-color: black;
  padding: 20px;
`;
const Logo = styled.img`
  height: 80px;
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  gap: 50px;
  margin-left: 100px;
  
  @media (max-width: 700px) {
    display: none;
  }
  `;
const Navitem = styled(NavLink)`
  text-decoration: none;
  color: white;
  position: relative;
 &::after{
            content: '';
            background-color: white;
            position: absolute;
            right: 0;
            left: 0;
            bottom: -5px;
            transform: scaleX(0);
            height: 2px;
            opacity: 0;
            &:hover:after{
              opacity: 1;
              transform: scaleX(1);
          }
          }
         
        
`;

const Sidebar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 100px;
  right: -40px;
  top: 10px;
  border-bottom: 1px solid black;
  color: black;
  background-color: gray;
  /* justify-content: center; */
  align-items: center;
  font-weight: bolder;
  width: 50%;
  height: 80%;
  z-index: 100;
  opacity: 0;
  transition: opacity 1.5s;
  @media (max-width: 700px) {
    opacity: 1;
  }
`;
const Button = styled.button`
  position: relative;
  display: none;
  @media (max-width: 700px) {
    left: 45%;
    
    display: block;

  }
`;
const SideButton=styled.button`
  position: relative;
  left: 30%;
  top: 10px;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
  

`