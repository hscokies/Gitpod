import * as styles from './terminal.styles.js'


export const TerminalAction = ({action, children}) => (
  <styles.Action>
    <styles.Highlighted>{action}</styles.Highlighted>
    {children}
  </styles.Action>)
