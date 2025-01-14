import * as styles from "./Button.styles.js";
import {SIZE, STYLE} from "@/shared/ui/Button/ui/constants.js";

export const Button = ({ children, style = STYLE.Black, size = SIZE.MediumSmall, ...props }) => (
  <styles.Button {...props} style={style} size={size} {...props}>
    {children}
  </styles.Button>
)
