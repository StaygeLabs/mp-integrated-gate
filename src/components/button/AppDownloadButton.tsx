import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';
import { Body16SB } from 'components/fonts/bodys';
import { useTranslate } from 'store/locale/hooks/useTranslate';
import isMobile from 'store/utils/isMobile';
import AppleIcon from 'components/icons/AppleIcon';
import GoogleIcon from 'components/icons/GoogleIcon';

interface AppDownloadButtonProps {
  onClick?: () => void;
}

const AppDownloadButton: React.FC<AppDownloadButtonProps> = (props) => {
  const t = useTranslate();
  const mobile = isMobile();

  return (
    <>
      {mobile ? (
        <MobileButtonWrap>
          <ButtonWrap onClick={props.onClick}>
            <AppleIcon />
            <ButtonText>App Store</ButtonText>
          </ButtonWrap>
          <ButtonWrap onClick={props.onClick}>
            <GoogleIcon />
            <ButtonText>Google Play</ButtonText>
          </ButtonWrap>
        </MobileButtonWrap>
      ) : (
        <ButtonWrap onClick={props.onClick}>
          <ButtonText>{t('.mp.integrated.button.download')}</ButtonText>
          <IconWrap>
            <Icon>
              <AppleIcon />
            </Icon>
            <Icon>
              <GoogleIcon />
            </Icon>
          </IconWrap>
        </ButtonWrap>
      )}
    </>
  );
};

export default AppDownloadButton;

const MobileButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  padding: 0 36px;
  border-radius: 36px;
  background-color: ${Colors.Neutral900};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 157px;
    height: 44px;
    border-radius: 8px;
    padding: 0 27px;
  }
`;

const ButtonText = styled.div`
  margin-right: 12px;
  ${Body16SB};
  font-weight: 600;
  color: ${Colors.White};
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 6px;
    font-weight: 500;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: ${Colors.Neutral800};
  cursor: pointer;
`;

const IconWrap = styled.div`
  display: flex;
  gap: 6px;
`;
