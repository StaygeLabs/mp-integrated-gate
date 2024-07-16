import {
  render as reactRender,
  unmount as reactUnmount,
} from 'rc-util/lib/React/render';

import { CenterModal } from 'components/modal/CenterModal';
import { CloseIcon } from 'components/icons';

const modalRootId = 'mnetplus-qa-modal-root';

export interface QRModalFuncProps {
  rootId?: string;
  title?: string;
  content?: string | React.ReactNode;
  imageUrl?: string;
  textList?: string[];
}

/**
 * @FIXME: shadowRoot 제거한 뒤에 코드 수정할 것
 */
function getRoot(elementId: string) {
  const root = document.getElementById(elementId);
  if (root) {
    return root;
  }
  const newRoot = document.createElement('div');
  const newStyle = document.createElement('style');
  newRoot.id = elementId;
  newStyle.innerHTML = `#${elementId}{position:fixed;top:0px;bottom:0px;left:0px;right:0px;z-index:1100;}@media screen and (min-width: 992px){#${elementId}{margin-left:auto;margin-right:auto;width:620px;}}`;

  document.body.appendChild(newRoot);
  document.body.appendChild(newStyle);
  return newRoot;
}

export function QRModal(props: QRModalFuncProps) {
  const root = getRoot(props.rootId ?? modalRootId);
  const close = () => {
    reactUnmount(root);
    document.body.removeChild(root);
  };
  // const handleConfirm = () => {
  //   // props.onConfirm?.();
  //   close();
  // };
  reactRender(
    <CenterModal onClose={close} width={398}>
      <CloseIcon
        onClick={close}
        color='white'
        style={{
          position: 'absolute',
          top: -37,
          right: 0,
          cursor: 'pointer',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '97px 0px 102px 0px',
          gap: 24,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '26px',
            fontFamily: 'Pretendard',
          }}
        >
          {props.title}
        </div>
        <img src={props.imageUrl} width={200} height={200} alt='' />
        <div
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '18px',
            fontFamily: 'Pretendard',
          }}
        >
          {props.textList?.map((text) => <div key={String(text)}>{text}</div>)}
        </div>
      </div>
    </CenterModal>,
    root,
  );
}
