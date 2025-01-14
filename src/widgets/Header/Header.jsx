import * as styles from './Header.styles';
import {NAVIGATION} from "@/widgets/Header/ui/constants.js";
import {Button, Link, Logo} from "@/shared/ui/index.js";
import {STYLE as ButtonStyles} from "@/shared/ui/Button/ui/constants.js";
import {Burger} from "@/features/index.js";

export const Header = () => {

  return (
    <styles.Wrapper>
      <Logo IncludeText/>
        <styles.Menu>
          {
            NAVIGATION.map((item, index) => (<Link key={index} $$highlighted={item.highlighted}>{item.label}</Link>))
          }
        </styles.Menu>
        <styles.Authorization>
          <Button style={ButtonStyles.Black}>
            Login
          </Button>
        </styles.Authorization>
      <Burger items={NAVIGATION}/>
    </styles.Wrapper>
  )
}
