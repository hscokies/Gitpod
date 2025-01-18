import * as styles from '@/shared/ui/icons/logo/logo.styles.js';
import {LogoIcon} from "@/shared/ui/icons/logo/Parts/logo-icon.jsx";
import {LogoText} from "@/shared/ui/icons/logo/Parts/logo-text.jsx"

export const Logo = ({IncludeText = false}) => (
    <styles.Wrapper>
        <LogoIcon/>
        {IncludeText && <LogoText/>}
    </styles.Wrapper>
);
