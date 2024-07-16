import styled from '@emotion/styled';

export const ModalContainer = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1024;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
`;
