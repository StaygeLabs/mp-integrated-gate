import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';
import { Body16SB } from 'components/fonts/bodys';

interface AppDownloadButtonProps {
  onClick?: () => void;
}

const AppDownloadButton: React.FC<AppDownloadButtonProps> = (props) => (
  <ButtonWrap onClick={props.onClick}>
    <ButtonText>앱 다운로드</ButtonText>
    <IconWrap>
      <Icon
        src='/static/icons/apple.png'
        width='28'
        onClick={() => console.log('')}
      />
      <Icon
        src='/static/icons/google.png'
        width='28'
        onClick={() => console.log('')}
      />
    </IconWrap>
  </ButtonWrap>
);

export default AppDownloadButton;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  padding: 0 36px;
  border-radius: 36px;
  background-color: ${Colors.Neutral800};
  cursor: pointer;
`;
const ButtonText = styled.div`
  margin-right: 12px;
  ${Body16SB};
  font-weight: 600;
  color: ${Colors.White};
  white-space: nowrap;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const IconWrap = styled.div`
  display: flex;
  gap: 6px;
`;
