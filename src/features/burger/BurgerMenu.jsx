import * as styles from './Burger.styles.js';
import {Link} from "@/shared/ui/index.js";
import { createPortal } from 'react-dom';

export const BurgerMenu = ({active, items}) => {
  if (!active) return <></>

  return createPortal(
    <styles.Menu>
      {items.map((item, index) => <Link key={index}>{item.label}</Link>)}
    </styles.Menu>, document.body
  )
}
