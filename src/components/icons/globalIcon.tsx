import { SVGAttributes } from 'react';
import Global from 'assets/images/icon_global.svg?react';

const GlobalIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
  <Global {...props} />
);

export default GlobalIcon;
