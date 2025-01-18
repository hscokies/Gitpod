import * as styles from './snackbar.styles.js'
import {Button, ButtonStyles} from "@/shared/ui/index.js";
import {useState} from "react";

export const Snackbar = ({buttonText, children}) => {
  const [active, setActive] = useState(true);
  return (
    <styles.Wrapper $$active={active}>
      <styles.Text>
        {children}
      </styles.Text>
      <Button $$variant={ButtonStyles.Variant.white} $$size={ButtonStyles.Size.medium} onClick={() => setActive(false)}>{buttonText}</Button>
    </styles.Wrapper>
  )
}
