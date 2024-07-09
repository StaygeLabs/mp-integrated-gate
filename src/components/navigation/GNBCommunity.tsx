import React, { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface GNBProps {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  box?: boolean;
  removeAnimation?: boolean;
  height?: number;
  removeHiddenOverflow?: boolean;
  transparent?: boolean;
  className?: string;
  onRendered?: () => void;
}

type MergeProps = GNBProps;

const LeftSlotBox = styled.div`
  margin-left: 16px;
  display: flex;
  align-self: center;
`;

const RightSlotBox = styled.div`
  margin-right: 16px;
  display: flex;
  align-self: center;
  > :not(:last-child) {
    margin-right: 16px;
  }
`;

const GNBWrapper = styled(animated.header, {
  shouldForwardProp: (props) => props !== 'removeAnimation',
})<
  Pick<
    GNBProps,
    | 'box'
    | 'removeAnimation'
    | 'height'
    | 'removeHiddenOverflow'
    | 'transparent'
  >
>`
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  overflow: ${(props) => (props.removeHiddenOverflow ? 'visible' : 'hidden')};
  height: ${(props) => (props.height ? `${props.height}px` : '44px')};
  background-image: none;
  ${(props) =>
    props.box &&
    css`
      ~ * {
        margin-top: 44px; // height of GNB
      }
    `}

  z-index: 750;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: transparent;
`;
const TextSlot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-self: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  /* or 21px */

  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

function GNBCommunity(props: React.PropsWithChildren<MergeProps>) {
  const style = useSpring({
    config: { duration: 500 },
    backgroundColor: 'rgba(250, 250, 250, 0)',
  });

  useEffect(() => {
    props.onRendered?.();
  }, [props]);

  return (
    <GNBWrapper
      style={props.removeAnimation ? {} : style}
      box={props.box}
      removeAnimation={props.removeAnimation}
      height={props.height}
      transparent={props.transparent}
      removeHiddenOverflow={props.removeHiddenOverflow}
      className={props.className}
    >
      <LeftSlotBox>{props.leftSlot}</LeftSlotBox>
      <TextSlot>
        <span>{props.children}</span>
      </TextSlot>
      <RightSlotBox>{props.rightSlot}</RightSlotBox>
    </GNBWrapper>
  );
}

GNBCommunity.defaultProps = {};

export default GNBCommunity;
