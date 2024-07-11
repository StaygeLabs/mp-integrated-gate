import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';
import { ArrowIcon, GlobalIcon } from 'components/icons';

interface GlobalButtonProps {}

const GlobalButton: React.FC<GlobalButtonProps> = () => (
  <GlobalButtonWrap>
    <GlobalIcon color={Colors.Neutral700} />
    <ArrowIcon color={Colors.Neutral700} />
  </GlobalButtonWrap>
);

export default GlobalButton;

const GlobalButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
