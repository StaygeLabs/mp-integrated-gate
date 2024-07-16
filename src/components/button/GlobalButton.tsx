import styled from '@emotion/styled';
import React, { useState } from 'react';
import * as Colors from 'components/cssToken/colors';
import { ArrowIcon, GlobalIcon } from 'components/icons';
import { useLocale } from 'store/locale/hooks/useLocale';
import i18next from 'i18next';
import { Locale } from 'store/locale/types';
import { keyframes } from '@emotion/react';

interface GlobalButtonProps {}

const GlobalButton: React.FC<GlobalButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const handleChangeLan = (lo: Locale) => {
    i18next.changeLanguage(lo);
  };

  return (
    <div style={{ position: 'relative' }}>
      <GlobalButtonWrap onClick={() => setIsOpen(!isOpen)}>
        <GlobalIcon color={Colors.Neutral900} />
        <ArrowIcon
          color={Colors.Neutral900}
          style={{ rotate: isOpen ? '180deg' : '0deg' }}
        />
      </GlobalButtonWrap>

      <DropBox isOpen={isOpen}>
        {LocaleData.map((data) => (
          <LocaleBox
            onClick={() => handleChangeLan(data.code as Locale)}
            key={data.code}
            isSeleted={data.code === String(locale)}
          >
            {data.locale}
          </LocaleBox>
        ))}
      </DropBox>
    </div>
  );
};

export default GlobalButton;

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

const LocaleData = [
  { locale: '한국어', code: 'ko' },
  { locale: 'English', code: 'en' },
  { locale: '日本語', code: 'ja' },
  { locale: '繁體中文', code: 'zh-cn' },
  { locale: '简体中文', code: 'zh-tw' },
];

const GlobalButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

const DropBox = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 35px;
  right: 0;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${Colors.Neutral400};
  background-color: ${Colors.White};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 10;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.1s ease-in;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.1s ease-out;

  @media (max-width: 768px) {
    margin-top: 52px;
    top: -20px;
    right: 0;
  }
`;

const LocaleBox = styled.div<{ isSeleted?: boolean }>`
  min-width: 114px;
  padding: 12px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: ${({ isSeleted }) =>
    isSeleted ? Colors.Neutral900 : Colors.Neutral200};
  border-top: 1px solid ${Colors.Neutral200};

  &:first-of-type {
    border-top: none;
  }
`;
