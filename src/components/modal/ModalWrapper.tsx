import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  overflow: auto;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  text-align: center;
  z-index: 100000;
  top: 0;
  bottom: 0;
  ::before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: '';
  }
`;
