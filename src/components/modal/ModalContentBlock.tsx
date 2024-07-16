import styled from '@emotion/styled';

export const ModalContentBlock = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
  background-clip: padding-box;
  outline: 0;
  pointer-events: auto;
  @media (min-width: 768px) {
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
  }
  box-sizing: border-box;
`;
