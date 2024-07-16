import { easings, useSpring } from 'react-spring';

export function useModalStyle(visible?: boolean) {
  const modalStyle = useSpring({
    config: {
      duration: 250,
      easing: visible ? easings.easeOutExpo : easings.easeOutCubic,
    },
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    opacity: visible ? 1 : 0,
    transform: visible ? 'scale(1)' : 'scale(0)',
    pointerEvents: visible ? 'auto' : 'none',
  });

  return modalStyle;
}
