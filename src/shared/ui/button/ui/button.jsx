import * as styles from "./button.styles.js";

export const Button = ({ children, variant, size, ...props }) => (
  <styles.Button {...props} $$variant={variant} $$size={size} {...props}>
    {children}
  </styles.Button>
)
