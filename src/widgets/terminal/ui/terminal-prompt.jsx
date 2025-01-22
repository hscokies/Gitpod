import * as styles from './terminal.styles.js'

export const TerminalPrompt = ({device, directory, root, onEnter}) => (
  <styles.Line>
    <styles.Highlighted>{device}</styles.Highlighted>
    <styles.Directory>{directory}</styles.Directory>
    {root ? '#' : "$"}
    <styles.LabelPlaceholder>
      <styles.Prompt
        title={"prompt"}
        placeholder={null}
        onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        onEnter(e.target.value)
        e.target.value = null
      }}/>
    </styles.LabelPlaceholder>
  </styles.Line>
)
