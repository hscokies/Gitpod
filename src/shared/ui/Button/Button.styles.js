import styled from "styled-components";

export const Button = styled.button`
  color: ${props => (props.style.color)};
  background-color: ${props => (props.style.backgroundColor)};

  font-family: 'Roboto';
  font-size:  ${props => (props.size.fontSize)};
  line-height:  ${props => (props.size.lineHeight)};

  border: none;
  border-radius: ${props => (props.size.borderRadius)};

  padding: ${props => (props.size.padding)};
`
