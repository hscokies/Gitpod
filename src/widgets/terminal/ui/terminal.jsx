import * as styles from './terminal.styles.js'
import {TerminalPrompt} from "@/widgets/index.js";
import {useRef, useState} from "react";

export const Terminal = ({children}) => {
  const [lines, setLines] = useState(children)
  const containerRef = useRef(null);
  return (
    <styles.Wrapper>
      <styles.Titlebar/>
      <styles.Container ref={containerRef}>
        {lines.map((line) => line)}
        <TerminalPrompt
          device={'Gitpod'}
          directory={'/Workspace'}
          root={false}
          onEnter={(data) => {
            setLines([...lines, <styles.Line key={lines.length + 1}>{data}</styles.Line>])
            setTimeout(() => containerRef.current.scrollTop = 99999, 100)
          }}
        />
      </styles.Container>
    </styles.Wrapper>
  )
}
