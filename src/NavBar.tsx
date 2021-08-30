import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import coding from "./Img/coding.png";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: linear-gradient(#246cd8, #9abdf2);
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-image: linear-gradient(#246cd8, #9abdf2);
  width: 50%;
  align-items: center;
`;

const Img = styled.img`
  height: 3rem;
  width: 3rem;
  margin: 7px;
`;

const Button = styled.button`
  border-radius: 0.7rem;
  /* background-color: #8cb5f4; */
  border: 1px solid #ffffff;
  font-weight: bold;
  height: 2rem;
  width: 6rem;
`;

function NavBar() {
  return (
    <Card>
      <Img src={coding} alt="error" />
      <Nav>
        <Link to="/">
          <Button>HOME</Button>
        </Link>
        <Button>Information</Button>
        <Button>Contact</Button>
        <Button>More</Button>
      </Nav>
    </Card>
  );
}

export default NavBar;
