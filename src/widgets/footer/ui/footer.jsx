import * as styles from './footer.styles.js'
import {NAVIGATION} from "@/widgets/footer/ui/navigation.js";
import {Community, GithubOrange, NavLink, Twitter} from "@/shared/ui/index.js";
import {LogoIcon} from "@/shared/ui/icons/logo/Parts/logo-icon.jsx";

export const Footer = () => (
  <styles.Wrapper>
    <styles.FooterContent>
      <styles.NavContainer>
        {
          NAVIGATION.map((item) => (
            <styles.NavSection key={item.title}>
              <styles.NavTitle>{item.title}</styles.NavTitle>
              {
                item.links.map(link => <NavLink key={link.text} href='/' $$highlighted={link.highlighted}>{link.text}</NavLink>)
              }
            </styles.NavSection>
          ))
        }
      </styles.NavContainer>
      <styles.Separator/>
      <styles.BottomContainer>
        <styles.Copyright>
          <LogoIcon width="24" height="24"/>
          <styles.CopyrightText href='/'>
            Copyright&nbsp;&copy; 2021 Gitpod
          </styles.CopyrightText>
        </styles.Copyright>
        <styles.SocialsContainer>
          <styles.SocialLink>
            <Twitter/>
          </styles.SocialLink>
          <styles.SocialLink>
            <Community/>
          </styles.SocialLink>
          <styles.SocialLink>
            <GithubOrange/>
          </styles.SocialLink>
        </styles.SocialsContainer>
      </styles.BottomContainer>
    </styles.FooterContent>
  </styles.Wrapper>
)
