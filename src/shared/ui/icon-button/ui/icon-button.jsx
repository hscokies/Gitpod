import * as styles from './icon-button.styles.js'

export const IconButton = ({icon, children}) => (
  <styles.Button>
    {icon}
    {children}
  </styles.Button>
)
