import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  @media (max-width: 1135px) {
    flex-flow: column-reverse nowrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1520px) {
    gap: 30px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
`


export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: start;
  gap: 16px;

  @media (max-width: 450px) {
    flex-flow: column nowrap;
    & > button {
      width: 100%;
    }
  }
`
