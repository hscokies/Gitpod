import styled from "styled-components";

export const Menu = styled.menu`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  overflow: hidden;
  background: #F8F4F4;
  width: 100vw;
  height: 100vh;
  padding-inline: 0;
  padding-top: 90px;

  &>a{
    border-bottom: 1px solid #dadada;
    font-size: 36px;
    padding: 8px 10px;
  }

  &>button{
    margin-inline: 15px;
  }

  @media (min-width: 947px) {
    display: none;
  }
`

export const Button = styled.button`
  display: flex;
  flex-flow: column nowrap;
  gap: 6px;

  background-color: ${props => (props.$$active ? "#12100c" : "#f3f1f0")};

  cursor: pointer;

  border: none;
  border-radius: 15px;
  padding: 12px;

  &::before, &::after {
    display: inline-block;
    background-color: ${props => (props.$$active ? "#f3f1f0" : "#12100c")};
    border-radius: 2px;
    content: "";
    height: .125rem;
    transform-origin: center;
    transition-duration: .2s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    width: 1rem;
  }

  &::before {
    transform: ${props => (props.$$active ? 'rotate(135deg)' : 'rotate(0deg)')};
    margin-bottom: ${props => (props.$$active ? '-8px' : '')};
  }

  &::after {
    transform: ${props => (props.$$active ? 'rotate(-135deg)' : 'rotate(0deg)')};
  }

  @media (min-width: 947px) {
    display: none;
  }
}
`
