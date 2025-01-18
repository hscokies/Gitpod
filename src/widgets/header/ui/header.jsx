import * as styles from './header.styles.js';
import {NAVIGATION} from "@/widgets/header/ui/constants.js";
import {Button, ButtonStyles, NavLink, Logo} from "@/shared/ui/index.js";
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
          <Button $$variant={ButtonStyles.Variant.black} $$size={ButtonStyles.Size.small}>
            Login
          </Button>
        </styles.Authorization>
      <Burger items={NAVIGATION}/>
    </styles.Wrapper>
  )
}
