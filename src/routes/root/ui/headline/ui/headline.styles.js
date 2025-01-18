import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  margin: 172px 0;

  @media (max-width: 640px) {
    margin: 100px 0;
  }
`

const BaseText = styled.p`
  font-size: 54px;
  line-height: 64px;

  @media (max-width: 1176px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 794px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 34px;
  }
`

export const HighlightText = styled(BaseText)`
  color: #12100C;
  font-family: 'Roboto Black';
`

export const IgnoreText = styled(BaseText)`
  color: #999795;
  text-decoration-line: line-through;
  font-family: Roboto;
`
