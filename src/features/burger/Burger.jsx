import * as styles from './Burger.styles.js';
import {useState} from "react";
import {BurgerMenu} from "@/features/burger/BurgerMenu.jsx";

export const Burger = ({items}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <styles.Button onClick={() => setActive(!active)} $$active={active}/>
      <BurgerMenu items={items} active={active}/>
    </>
  )
}
