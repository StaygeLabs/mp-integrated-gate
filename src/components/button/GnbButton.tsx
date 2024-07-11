import styled from '@emotion/styled';
import { Caption12R } from 'components/fonts/captions';
import React from 'react';
import * as Colors from 'components/cssToken/colors';

interface GnbButtonProps {
  text: string;
  onClick?: () => void;
}

const GnbButton: React.FC<GnbButtonProps> = (props) => (
  <ButtonWrap onClick={props.onClick}>{props.text}</ButtonWrap>
);

export default GnbButton;

const ButtonWrap = styled.div`
  height: 32px;
  padding: 0 16px;
  border-radius: 50px;
  background-color: ${Colors.Neutral100};
  ${Caption12R};
  line-height: 32px;
  white-space: nowrap;
  cursor: pointer;
`;
