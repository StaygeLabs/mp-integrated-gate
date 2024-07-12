import { SVGAttributes } from 'react';
import Instagram from 'assets/images/icon_instagram.svg?react';

const InstagramIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
  <Instagram {...props} />
);

export default InstagramIcon;
