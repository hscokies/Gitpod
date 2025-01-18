import * as styles from "./button.styles.js";
import {SIZE, VARIANT} from "@/shared/ui/button/ui/constants.js";

export const Button = ({ children, variant = VARIANT.Black, size = SIZE.MediumSmall, ...props }) => (
  <styles.Button {...props} $$variant={variant} $$size={size} {...props}>
    {children}
  </styles.Button>
)
