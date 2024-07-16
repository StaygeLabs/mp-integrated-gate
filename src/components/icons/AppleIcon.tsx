import { SVGAttributes } from 'react';
import Apple from 'assets/images/icon_apple.svg?react';

const AppleIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
  <Apple {...props} />
);

export default AppleIcon;
