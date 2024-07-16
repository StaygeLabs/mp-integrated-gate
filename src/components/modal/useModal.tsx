import { useEffect, useState } from 'react';

export function useModal(onClose?: () => void) {
  const [visible, setVisible] = useState(true);
  const close = () => {
    setVisible(false);
  };
  useEffect(() => {
    if (!visible) {
      const timer = window.setTimeout(() => {
        onClose?.();
      }, 250);

      return () => {
        window.clearTimeout(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return { visible, close };
}
