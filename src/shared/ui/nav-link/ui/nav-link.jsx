import * as styles from './nav-link.styles.js';

export const NavLink = ({children, ...props}) => <styles.Text {...props}>{children}</styles.Text>
