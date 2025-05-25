import * as styles from './remote-feature.styles.js';
import { Chrome, Firefox, H2, IconButton, Paragraph } from '@/shared/ui/index.js';
import Illustration from './static/vscode-browser.webp';
import { useRef, useState } from 'react';

export const RemoteFeature = () => {
  const bannerRef = useRef(null);
  const [offset, setOffset] = useState({x: 1, y: 1});

  const onMouseMove = (event) => {
    const rect = bannerRef.current.getBoundingClientRect();
    setOffset({
      x: event.clientX - rect.left <= rect.width / 2 ? -5 : 5,
      y: event.clientY - rect.top <= rect.height / 2 ? -5 : 5,
    });
  }

  return <styles.Wrapper>
    <H2>Remote-first. Secure by design.</H2>
    <styles.Banner
      ref={bannerRef}
      src={Illustration}
      alt="vscode-webgui"
      $$offsetX={offset.x}
      $$offsetY={offset.y}
      onMouseMove={onMouseMove}/>
    <Paragraph>
      You no longer need an over-powered laptop to code, Gitpod works just as
      smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes
      all source code and never stores it on insecure machines and networks.
    </Paragraph>

    <styles.ButtonsContainer>
      <IconButton icon={<Chrome width={24} height={24} />}>
        Chrome Extension
      </IconButton>
      <IconButton icon={<Firefox width={24} height={24} />}>
        Firefox Extension
      </IconButton>
    </styles.ButtonsContainer>
  </styles.Wrapper>;
};
