import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 20px 32px;

  @media (max-width: 945px) {
    margin-inline: 20px;
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
  @media (max-width: 945px) {
    display: none;
  }
`;

export const Authorization = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 945px) {
    display: none;
  }
`
