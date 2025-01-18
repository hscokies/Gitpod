import * as styles from './header.styles.js';
import {NAVIGATION} from "@/routes/root/ui/header/ui/constants.js";
import { VARIANT } from "@/shared/ui/button/ui/constants.js";
import {Button, NavLink, Logo} from "@/shared/ui/index.js";
import {Burger} from "@/widgets/index.js";

export const Header = () => {

  return (
    <styles.Wrapper>
      <Logo IncludeText/>
        <styles.Menu>
          {
            NAVIGATION.map((item, index) => (<NavLink key={index} $$highlighted={item.highlighted}>{item.label}</NavLink>))
          }
        </styles.Menu>
        <styles.Authorization>
          <Button $$variant={VARIANT.Black}>
            Login
          </Button>
        </styles.Authorization>
      <Burger items={NAVIGATION}/>
    </styles.Wrapper>
  )
}
