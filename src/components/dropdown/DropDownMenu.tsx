/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ArrowIcon, GlobalIcon } from 'components/icons';
import * as Colors from 'components/cssToken/colors';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

interface DropDownMenuProps {
  menuItems: {
    name: string;
    ep_button_name?: string;
    icon?: React.ReactNode;
    onClick: () => void;
  }[];
  current: string | any;
}
const Container = styled.div`
  position: relative;
  cursor: pointer;
  max-width: 100px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  /*
     Introduced in IE 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
  -ms-user-select: none;
  user-select: none;
`;

const ListBox = styled.div<{ isOpen: boolean }>`
  animation: ${(props: { isOpen: boolean }) =>
      props.isOpen ? fadeIn : fadeOut}
    0.1s ease-in;
  visibility: ${(props: { isOpen: boolean }) =>
    props.isOpen ? 'visible' : 'hidden'};
  transition: visibility 0.1s ease-out;

  background: white;
  border-radius: 8px;
  position: absolute;
  top: 40px;
  right: 0px;
  width: 110px;
  overflow: hidden;
  z-index: 100;
  padding: 8px 0px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  /* filter: box-shadow(0px 0px 15px rgba(0, 0, 0, 0.25)); */
`;
const ListItem = styled.div<{ isSelected?: boolean }>`
  min-width: 114px;
  padding: 12px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: ${({ isSelected }) =>
    isSelected ? Colors.Neutral900 : Colors.Neutral200};
  border-top: 1px solid ${Colors.Neutral200};

  &:first-of-type {
    border-top: none;
  }
  :hover {
    background: #ddd;
  }
`;

const DropDownMenu = (props: DropDownMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showList, setShowList] = useState(false);
  const handleClickOutside = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (ref.current && !ref.current.contains(e.target)) {
      setTimeout(() => {
        setShowList(false);
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (!showList) {
      window.removeEventListener('mouseup', handleClickOutside, true);
    }
  }, [showList, handleClickOutside]);
  return (
    <Container
      ref={ref}
      onClick={() => {
        if (!showList) {
          window.addEventListener('mouseup', handleClickOutside, true);
        }
        setShowList((prev) => !prev);
      }}
    >
      <GlobalButtonWrap onClick={() => setShowList(!showList)}>
        <GlobalIcon color={Colors.Neutral900} />

        <ArrowIcon color={Colors.Neutral900} />
      </GlobalButtonWrap>

      <ListBox isOpen={showList}>
        {props.menuItems.map((item) => (
          <ListItem
            key={item.name}
            isSelected={item.name === props.current}
            onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();
              setShowList(false);
              item.onClick();
            }}
          />
        ))}
      </ListBox>
    </Container>
  );
};

export default DropDownMenu;

const GlobalButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
