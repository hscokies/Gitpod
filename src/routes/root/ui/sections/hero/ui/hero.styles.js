import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 92px;

  font-family: 'Roboto',sans-serif;

  @media (max-width: 947px) {
    justify-content: start;
  }
`

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: 947px) {
    padding: 50px;
    background: #F8F4F4A4;
    border-radius: 50px;
  }

  @media (max-width: 448px) {
    padding-inline: 0;
  }
`

export const Heading = styled.h1`
  max-width: 546px;
  font-family: 'Roboto Black', sans-serif;
  font-size: 80px;
  font-weight: bold;
  line-height: 88px;
  color: #12100C;

  @media (max-width: 1344px) and (min-width: 946px) {
    font-size: 48px;
    line-height: 52px;
  }

  @media (max-width: 650px) {
    font-size: 56px;
  }

  @media (max-width: 511px) {
    font-size: 36px;
    line-height: 50px;
  }
`

export const Tagline = styled.p`
  max-width: 475px;
  margin-top: 31px;

  font-size: 23px;
  line-height: 32px;

  color: #575452;
`

export const Action = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;

  margin-top: 48px;

  @media (max-width: 449px) {
    flex-flow: column nowrap;
  }
`

export const Tip = styled.span`
  max-width: 187px;
  font-size: 16px;
  line-height: 24px;
  color: #575452;
`

export const Platforms = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 28px;

  margin: 16px 8px;

  @media (max-width: 449px) {
    justify-content: space-evenly;
  }
`

export const LinkWrapper = styled.a`
  cursor: pointer;
`

export const RotateAnimation = keyframes`
  from{
    transform: rotate(-10deg);
  }
  to{
    transform: rotate(10deg);
  }
`;

export const Banner = styled.img`
  display: block;
  width: 100%;
  max-width: 700px;
  max-height: 672px;
  padding: 20px;

  animation-name: ${RotateAnimation};
  animation-duration: 5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @media (max-width: 1344px) and (min-width: 946px) {
    max-width: 50%;
  }

  @media (max-width: 946px) {
    display: none;
  }
`
