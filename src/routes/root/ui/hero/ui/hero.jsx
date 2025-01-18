import * as styles from './hero.styles.js'
import {Bitbucket, Button, GithubLight, GitlabOrange, ButtonStyles} from "@/shared/ui/index.js";
import Illustration from './static/illustration-large.webp'

export const Hero = () => {
  return (
    <styles.Wrapper>
      <styles.Container>
        <styles.Heading>Always Ready&nbsp;to&nbsp;Code.</styles.Heading>
        <styles.Tagline>Spin up fresh, automated dev environments for each task, in the cloud, in seconds.
        </styles.Tagline>
        <styles.Action>
          <Button $$variant={ButtonStyles.Variant.yellow} $$size={ButtonStyles.Size.large}>Try Now</Button>
          <styles.Tip>
            Open a workspace.
            Start from any Git context.
          </styles.Tip>
        </styles.Action>
        <styles.Platforms>
          <GitlabOrange/>
          <GithubLight/>
          <Bitbucket/>
        </styles.Platforms>
      </styles.Container>
      <styles.Banner src={Illustration} alt={'Illustration'}/>
    </styles.Wrapper>
  )
}
