import { animated, useSpring } from 'react-spring';

import styled from '@emotion/styled';

interface ModalMaskProps {
  visible?: boolean;
}

type MergeProps = ModalMaskProps;

const ModalMaskBlock = styled(animated.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
`;

function ModalMask(props: MergeProps) {
  const maskStyle = useSpring({
    config: { duration: 250 },
    from: {
      backgroundColor: 'rgba(55, 55, 55, 0)',
    },
    backgroundColor: props.visible
      ? 'rgba(55, 55, 55, 0.6)'
      : 'rgba(55, 55, 55, 0)',
    pointerEvents: props.visible ? 'auto' : 'none',
  });
  return <ModalMaskBlock style={maskStyle} />;
}

ModalMask.defaultProps = {};

export default ModalMask;
