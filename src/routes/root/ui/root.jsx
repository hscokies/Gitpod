import * as styles from './root.styles.js'
import {Header, Headline, Hero} from "@/widgets/index.js";

export const RootPage = () => (
  <>
    <Header/>
    <styles.Content>
      <Hero/>
      <Headline/>
    </styles.Content>
  </>
)
