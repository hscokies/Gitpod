import * as styles from './prebuilds-feature.styles.js'
import {Button, ButtonStyles, H3, Paragraph} from "@/shared/ui/index.js";
import {Terminal, TerminalAction, TerminalLine} from "@/widgets/index.js";

export const PrebuildsFeature = () => (
  <styles.Wrapper>
    <styles.DescriptionContainer>
      <styles.TextContainer>
        <H3>Think CI/CD for dev environments</H3>
        <Paragraph style={{maxWidth: '650px'}}>
          We invented prebuilds so application code, configuration and
          infrastructure can all be stored as machine-executable code
          in your git repositories and applied to dev environments
          automatically and continuously.
        </Paragraph>
      </styles.TextContainer>
      <styles.ButtonsContainer>
        <Button $$variant={ButtonStyles.Variant.yellow} $$size={ButtonStyles.Size.small}>More on prebuilds</Button>
        <Button $$variant={ButtonStyles.Variant.red} $$size={ButtonStyles.Size.small}>Documentation</Button>
      </styles.ButtonsContainer>
    </styles.DescriptionContainer>
    <Terminal>
      <TerminalAction action={'Compiling'}>surf v1.0.3</TerminalAction>
      <TerminalAction action={'Compiling'}>http-client v6.3.5</TerminalAction>
      <TerminalAction action={'Compiling'}>surf v2.2.0</TerminalAction>
      <TerminalAction action={'Compiling'}>git v0.13.17</TerminalAction>
      <TerminalAction action={'Compiling'}>shadow-rs v0.5.24</TerminalAction>
      <TerminalAction action={'Compiling'}>nu v0.28.0</TerminalAction>
      <TerminalAction action={'Installing'}>/workspace/.cargo/bin/nu</TerminalAction>
      <TerminalAction action={'Finished'}>dev target(s) in 12m 30s</TerminalAction>
      <TerminalLine/>
      <TerminalLine>exit</TerminalLine>
      <TerminalLine>🤙 This task ran as workspace prebuild</TerminalLine>
      <TerminalLine>🎉 Well done on saving 12 minutes</TerminalLine>
    </Terminal>
  </styles.Wrapper>
)
