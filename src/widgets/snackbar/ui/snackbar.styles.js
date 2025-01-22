import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999999999;
  bottom: 0;

  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  transition: transform .5s ease-in-out;
  transform: translateY(${props => (props.$$active ? '0' : '100%')});

  box-sizing: border-box;
  padding: 12px 16px;

  background-color: #ECE7E5;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 880px) {
    flex-flow: column wrap;
    gap: 20px;
    & > button {
      width: 100%;
    }
  }
`

export const Text = styled.span`
  color: #54514D;
  & > a {
    cursor: pointer;
    text-decoration: underline;
    color: #6B6764;
  }
`
