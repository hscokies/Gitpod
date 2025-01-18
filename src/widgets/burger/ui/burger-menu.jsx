import * as styles from './burger.styles.js';
import {Button, NavLink} from "@/shared/ui/index.js";
import {createPortal} from 'react-dom';
import {SIZE} from "@/shared/ui/button/ui/constants.js";

export const BurgerMenu = ({active, items}) => {
  if (!active) return <></>

  return createPortal(
      <styles.Menu>
        {items.map((item, index) => <NavLink key={index}>{item.label}</NavLink>)}
        <Button size={SIZE.Large}>Login</Button>
      </styles.Menu>, document.body
  )
}
