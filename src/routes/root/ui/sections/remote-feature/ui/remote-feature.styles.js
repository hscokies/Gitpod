import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin: 170px 0;

  & > p {
    text-align: center;
    max-width: calc(1vw + 700px);
  }
`

export const Banner = styled.img`
  width: 100%;
  max-width: calc(692px*2);
  margin: 47px 0 49px 0;
`

export const ButtonsContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;

  @media (max-width: 440px){
    width: 100%;
    flex-flow: column nowrap;
    &>button {
      width: 100%;
    }
  }
`
