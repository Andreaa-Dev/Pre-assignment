import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius: 0.7rem;
  background-color: #8cb5f4;
  border: 1px solid #8cb5f4;
  padding: 0.5rem;
`;
type ButtonProps = {
  id: number;
};

function Button({ id }: ButtonProps) {
  const history = useHistory();
  function handlerClick() {
    history.push(`/${id}`);
  }
  return <ButtonStyle onClick={handlerClick}>More details</ButtonStyle>;
}

export default Button;
