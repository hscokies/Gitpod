import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px;

  font-family: "Roboto Black",sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #12100c;

  background-color: #ffffff;
  border: none;
  border-radius: 9px;
  box-shadow: 0 1px 2px #0000000A;

  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f9f9f9;
  }
`
