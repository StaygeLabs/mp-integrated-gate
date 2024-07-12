import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';

const PlusConSection = () => (
  <Container>
    <LeftBox>
      <SectionTitle>Plus Con</SectionTitle>
      <SectionContent>
        {`Plus CON은 KPOP, K-콘텐츠를 넘어 K-라이프스타일을 경험할 수 있는 글로벌 최대 K-페스티벌인 KCON 현장을 보다 생생하고 편리하게 즐길 수 있는 플랫폼입니다.
        앞으로, KCON을 넘어 보다 다양한 페스티벌에서 함께 하기 위해 준비 중입니다.
        `}
      </SectionContent>
    </LeftBox>
    <RightBox>
      <SectionImage src='/static/images/pluscon.png' alt='' />
    </RightBox>
  </Container>
);

export default PlusConSection;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 110px;
`;

const LeftBox = styled.div`
  width: 100%;
  margin-right: 106px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SectionImage = styled.img`
  width: 100%;
`;

const SectionTitle = styled.h2`
  width: 100%;
  font-size: 42px;
  font-weight: 700;
  color: ${Colors.Neutral900};
`;

const SectionContent = styled.div`
  width: 100%;
  font-size: 16px;
  color: ${Colors.Neutral700};
`;
