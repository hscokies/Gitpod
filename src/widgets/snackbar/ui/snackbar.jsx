import * as styles from './snackbar.styles.js'
import {SIZE, VARIANT} from "@/shared/ui/button/ui/constants.js";
import {Button} from "@/shared/ui/index.js";
import {useState} from "react";

export const Snackbar = ({buttonText, children}) => {
  const [active, setActive] = useState(true);
  return (
    <styles.Wrapper $$active={active}>
      <styles.Text>
        {children}
      </styles.Text>
      <Button variant={VARIANT.White} size={SIZE.Medium} onClick={() => setActive(false)}>{buttonText}</Button>
    </styles.Wrapper>
  )
}
