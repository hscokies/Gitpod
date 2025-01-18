import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  transition: background-color .3s ease-in-out;

  ${props => (props.$$size)};
  ${props => (props.$$variant)};

`
