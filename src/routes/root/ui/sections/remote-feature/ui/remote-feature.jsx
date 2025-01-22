import * as  styles from './remote-feature.styles.js'
import {Chrome, Firefox, H2, IconButton, Paragraph} from "@/shared/ui/index.js";
import Illustration from './static/vscode-browser.webp'

export const RemoteFeature = () => (
  <styles.Wrapper>
    <H2>Remote-first. Secure by design.</H2>
    <styles.Banner src={Illustration} alt="vscode-webgui"/>
    <Paragraph>
      You no longer need an over-powered laptop to code, Gitpod works just as
      smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes
      all source code and never stores it on insecure machines and networks.
    </Paragraph>

    <styles.ButtonsContainer>
      <IconButton icon={<Chrome width={24} height={24} />}>
        Chrome Extension
      </IconButton>
      <IconButton icon={<Firefox width={24} height={24} />}>
        Firefox Extension
      </IconButton>
    </styles.ButtonsContainer>
  </styles.Wrapper>
)
