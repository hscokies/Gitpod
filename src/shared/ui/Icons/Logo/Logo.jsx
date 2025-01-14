import * as styles from '@/shared/ui/Icons/Logo/Logo.styles.js';
import {LogoIcon} from "@/shared/ui/Icons/Logo/Parts/LogoIcon.jsx";
import {LogoText} from "@/shared/ui/Icons/Logo/Parts/LogoText.jsx"

export const Logo = ({IncludeText = false}) => (
    <styles.Wrapper>
        <LogoIcon/>
        {IncludeText && <LogoText/>}
    </styles.Wrapper>
);