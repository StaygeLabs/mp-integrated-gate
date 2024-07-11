import { SVGAttributes } from 'react';
import Arrow from 'assets/images/icon_arrow.svg?react';

const ArrowIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
  <Arrow {...props} />
);

export default ArrowIcon;
