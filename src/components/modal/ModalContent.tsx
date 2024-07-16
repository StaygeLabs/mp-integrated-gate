import { PropsWithChildren } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ModalBody } from './ModalBody';
import { ModalContentBlock } from './ModalContentBlock';
import { ModalWrapper } from './ModalWrapper';
import { useModalStyle } from './useModalStyle';

interface ModalContentProps {
  visible?: boolean;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  removePadding?: boolean;
  blockClickCloseOutside?: boolean;
  width?: number;
  borderRaduis?: number;
  backgroundColor?: string;
}

type MergeProps = ModalContentProps;

const StyledModalContentBlock = styled(ModalContentBlock)<{
  removePadding?: boolean;
  borderRadius?: number;
  bgColor?: string;
}>`
  padding: ${(props) => (props.removePadding ? '' : '48px 24px')};
  border-radius: ${(props) => props.borderRadius ?? 8}px;
  background-color: ${(props) => props.bgColor ?? '#fff'};
`;

const StyledModalBody = styled(ModalBody)<{ width?: number }>`
  ${(props) =>
    props.width
      ? css`
          min-width: ${props.width}px;
          max-width: ${props.width}px;
        `
      : css`
          width: 290px;
          max-width: calc(100vw - 32px);
        `}
  vertical-align: middle;
`;

function ModalContent(props: PropsWithChildren<MergeProps>) {
  const modalStyle = useModalStyle(props.visible);

  return (
    <ModalWrapper
      className={props.className}
      onClick={(e) => {
        if (props.blockClickCloseOutside) return;
        props.onClose?.(e);
      }}
    >
      <StyledModalBody
        width={props.width}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        style={modalStyle}
      >
        <StyledModalContentBlock
          removePadding={props.removePadding}
          borderRadius={props.borderRaduis}
          bgColor={props.backgroundColor}
        >
          {props.children}
        </StyledModalContentBlock>
      </StyledModalBody>
    </ModalWrapper>
  );
}

ModalContent.defaultProps = {};

export default ModalContent;
