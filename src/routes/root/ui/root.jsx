import * as styles from './root.styles.js'
import {Headline, Hero, PrebuildsFeature, RemoteFeature} from "@/routes/root/ui/sections/index.js";

export const RootPage = () => (
    <styles.Content>
      <Hero/>
      <Headline/>
      <PrebuildsFeature/>
      <RemoteFeature/>
    </styles.Content>
)
