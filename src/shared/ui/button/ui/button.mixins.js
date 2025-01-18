import {css} from "styled-components";

export const Size = {
  small: css`
    font-size: 14px;
    line-height: 20px;
    border-radius: 12px;
    padding: 8px 24px;
  `,

  mediumSmall: css`
    font-size: 14px;
    line-height: 16px;
    border-radius: 11px;
    padding: 6px 23px;
  `,

  medium: css`
    font-size: 16px;
    line-height: 24px;
    border-radius: 12px;
    padding: 8px 18px;
  `,

  large: css`
    font-size: 18px;
    line-height: 23px;
    border-radius: 8px;
    padding: 11px 24px;
  `
}

export const Variant = {
  black: css`
    background-color: #12100c;
    font-family: Roboto,sans-serif;
    color: #f9f9f9;
    &:hover {
      background-color: #2d2d2d;
    }
  `,

  yellow: css`
    background-color: #ffae33;
    font-family: "Roboto Black",sans-serif;
    color: #12100c;
    &:hover {
      background-color: #ffbe5c;
    }
  `,

  red: css`
    background-color: #ffb0ae;
    font-family: "Roboto Black",sans-serif;
    color: #12100c;
    &:hover {
      background-color: #fcd7d6;
    }
  `,

  white: css`
    background-color: #f9f9f9;
    font-family: "Roboto Black",sans-serif;
    color: #585653;
    &:hover {
      background-color: #ffffff;
    }
  `,
}
