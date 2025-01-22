import styled from "styled-components";
import {NavLink} from "@/shared/ui/index.js";

export const Wrapper = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 48px 0;
`

export const FooterContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 45px;
  @media (max-width: 516px) {
    gap: 20px;
  }

`

export const NavContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 171px;

  @media (max-width: 1215px) {
    gap: 100px;
  }

  @media (max-width: 835px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 516px) {
    gap: 0;
    grid-template-columns: 1fr 1fr;
    padding-inline: 12px;
  }
`

export const NavSection = styled.menu`
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  max-width: 200px;
`

export const NavTitle = styled(NavLink)`
  font-family: "Roboto Black", sans-serif;
  color: #12100c;
`

export const Separator = styled.hr`
  box-sizing: border-box;
  width: 100%;
  color: #ece7e5;
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (max-width: 516px) {
    flex-flow: column-reverse;
    align-items: center;
    gap: 20px;
  }
`

export const Copyright = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
`

export const CopyrightText = styled(NavLink)``;

export const SocialsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
`

export const SocialLink = styled.a`
    cursor: pointer;
`
