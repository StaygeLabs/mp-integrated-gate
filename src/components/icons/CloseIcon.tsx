import { SVGAttributes } from 'react';
import Close from 'assets/images/icon_close.svg?react';

const CloseIcon: React.FC<SVGAttributes<SVGElement>> = (props) => (
  <Close {...props} />
);

export default CloseIcon;
