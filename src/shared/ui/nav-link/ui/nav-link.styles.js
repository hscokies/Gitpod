import styled from "styled-components";

export const Text = styled.a`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: #12100C46;
  line-height: 24px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  position: relative;

  &:hover {
    color: #12100CA0;
  }

  &::after {
    font-family: 'Roboto', sans-serif;
    content: ${props => (props.$$highlighted ? '"*"' : '')};
    color: #FF8A00;
    font-size: 12px;
    position: absolute;
    right: -8px;
    top: -8px;
  }
`;
