import { PropsWithChildren, useEffect } from 'react';

import { useModal } from 'components/modal/useModal';
import { ModalContainer } from 'components/modal/ModalContainer';
import ModalContent from 'components/modal/ModalContent';
import ModalMask from 'components/modal/ModalMask';

interface CenterModalProps {
  onClose?: () => void;
  blockClickCloseOutside?: boolean;
  width?: number;
  hide?: boolean;
  borderRadius?: number;
  backgroundColor?: string;
}

type MergeProps = PropsWithChildren<CenterModalProps>;

export function CenterModal(props: MergeProps) {
  const { visible, close } = useModal(props.onClose);

  useEffect(() => {
    if (props.hide) {
      close();
    }
  }, [props.hide, close]);

  return (
    <>
      <ModalMask visible={visible} />
      <ModalContainer visible={visible}>
        <ModalContent
          width={props.width}
          removePadding
          visible={visible}
          onClose={close}
          blockClickCloseOutside={props.blockClickCloseOutside}
          borderRaduis={props.borderRadius}
          backgroundColor={props.backgroundColor}
        >
          {props.children}
        </ModalContent>
      </ModalContainer>
    </>
  );
}

CenterModal.defaultProps = {};
