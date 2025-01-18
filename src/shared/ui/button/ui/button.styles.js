import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  color: ${props => (props.$$variant.color)};
  background-color: ${props => (props.$$variant.backgroundColor)};

  font-family:${props => (props.$$size.fontFamily)};
  font-size:  ${props => (props.$$size.fontSize)};
  line-height:  ${props => (props.$$size.lineHeight)};

  border: none;
  border-radius: ${props => (props.$$size.borderRadius)};

  padding: ${props => (props.$$size.padding)};

  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: ${props => (props.$$variant.hoverBackground)};
  }
`
