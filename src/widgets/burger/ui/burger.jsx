import * as styles from './burger.styles.js';
import {useState} from "react";
import {BurgerMenu} from "@/widgets/burger/ui/burger-menu.jsx";

export const Burger = ({items}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <styles.Button aria-label="burger-menu" onClick={() => setActive(!active)} $$active={active}/>
      <BurgerMenu items={items} active={active}/>
    </>
  )
}
