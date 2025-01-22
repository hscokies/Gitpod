import * as styles from './terminal.styles.js'

export const TerminalPrompt = ({device, directory, root, onEnter}) => (
  <styles.Line>
    <styles.Highlighted>{device}</styles.Highlighted>
    <styles.Directory>{directory}</styles.Directory>
    {root ? '#' : "$"}
    <styles.Prompt onKeyDown={(e) => {
      if (e.key !== 'Enter') return;
      onEnter(e.target.value)
      e.target.value = null
    }}/>
  </styles.Line>
)
