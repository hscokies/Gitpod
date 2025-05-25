import * as styles from './prebuilds-feature.styles.js'
import {Button, ButtonStyles, H2Small, Paragraph} from "@/shared/ui/index.js";
import {Terminal, TerminalAction, TerminalLine} from "@/widgets/index.js";
import { useEffect, useState } from 'react';
import Lines from '@/routes/root/ui/sections/prebuilds-feature/ui/lib/data.json';
import { useInView } from 'react-intersection-observer';

export const PrebuildsFeature = () => {
  const [lines, setLines] = useState([])

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: .5,

  })

  useEffect(() => {
    if (!inView) {
      return;
    }

    Lines.forEach((line) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, line.delay);
    })
  }, [inView]);

  return <styles.Wrapper ref={ref}>
    <styles.DescriptionContainer>
      <styles.TextContainer>
        <H2Small>Think CI/CD for dev environments</H2Small>
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
      {lines.map((data, index) => {
        if (data.type === 'action'){
          return <TerminalAction key={index} action={data.action}>{data.text}</TerminalAction>
        }
        else if (data.type === 'line'){
          return <TerminalLine key={index}>{data.text}</TerminalLine>
        }
      })}
    </Terminal>
  </styles.Wrapper>
}
