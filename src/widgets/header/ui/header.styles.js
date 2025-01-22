import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 20px 32px;

  backdrop-filter: blur(12px);

  @media (max-width: 947px) {
    justify-content: space-between;
    width: calc(100vw - 40px);
    margin: 20px 20px;
    border-radius: 18px;
    padding: 5px 10px;
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 2px 0 #0000001A;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 48px;
  @media (max-width: 947px) {
    display: none;
  }
`;

export const Authorization = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 947px) {
    display: none;
  }
`
