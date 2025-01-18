import * as styles from './burger.styles.js';
import {Button, ButtonStyles, NavLink} from "@/shared/ui/index.js";
import {createPortal} from 'react-dom';

export const BurgerMenu = ({active, items}) => {
  if (!active) return <></>

  return createPortal(
      <styles.Menu>
        {items.map((item, index) => <NavLink key={index}>{item.label}</NavLink>)}
        <Button size={ButtonStyles.Size.large} variant={ButtonStyles.Variant.black}>Login</Button>
      </styles.Menu>, document.body
  )
}
