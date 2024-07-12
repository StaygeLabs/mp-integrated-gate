import { SVGAttributes } from 'react';
import Youtube from 'assets/images/icon_youtube.svg?react';

const YoutubeIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
  <Youtube {...props} />
);

export default YoutubeIcon;
