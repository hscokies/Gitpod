import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px #00000014, 0 5px 20px #0000001F;
  border-radius: 20px;
  padding: 10px 0 45px 50px;
  min-width: 556px;
  max-width: 692px;

  @media (max-width: 670px) {
    display: none;
  }
`
export const Titlebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  backdrop-filter: blur(1px);
  border-radius: 20px;
  &:before{
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 8px;
    background: #e7e7e7;
  }
`

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  font-family: monospace;
  font-size: 24px;
  color: #575452;
  padding-top: 48px;
  height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  &>p{
    min-height: 32px;
  }
`

export const Action = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
`;

export const Highlighted = styled.span`
  color: #fc8800;
`

export const Directory = styled.span`
  color: #0099ef;
`

export const Line = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Prompt = styled.input`
  position: relative;
  flex-grow: 1;
  background: transparent;
  border: none;
  font-family: monospace;
  font-size: 24px;
  color: #575452;
`

export const LabelPlaceholder = styled.label``
