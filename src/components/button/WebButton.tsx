import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';
import { Body16SB } from 'components/fonts/bodys';

interface WebButtonProps {
  linkUrl: string;
}

const WebButton: React.FC<WebButtonProps> = (props) => (
  <ButtonWrap onClick={() => window.open(props.linkUrl, 'blank')}>
    <ButtonText>웹 바로가기</ButtonText>
  </ButtonWrap>
);

export default WebButton;

const ButtonWrap = styled.div`
  height: 64px;
  padding: 0 73px;
  border-radius: 36px;
  background-color: ${Colors.White};
  ${Body16SB};
  font-weight: 600;
  line-height: 64px;
  border: 2px solid ${Colors.Neutral900};
  white-space: nowrap;
  cursor: pointer;
`;

const ButtonText = styled.div`
  ${Body16SB};
  font-size: 18px;
  font-weight: 600;
  line-height: 64px;
  white-space: nowrap;
  cursor: pointer;
`;
