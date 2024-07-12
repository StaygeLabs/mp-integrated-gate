import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';

const MnetPlusSection = () => (
  <Container>
    <LeftBox>
      <SectionTitle>Mnet Plus</SectionTitle>
      <SectionContent>
        {`Mnet Plus는 KPOP 콘텐츠를 바탕으로 팬덤의 다양한 인터랙션을 통해
        아티스트를 발견해 성장시키고 팬덤을 확장시키기 위한 활동을 하는
        서비스입니다. 현재까지 약 1,300만명의 글로벌 유저의 투표를 이끌며, 이제
        투표 플랫폼을 넘어 CJ ENM의 다양한 온-오프라인 음악 콘텐츠를
        인터랙티브하게 즐길 수 있는 콘텐츠 허브로 발전하고자 합니다.`}
      </SectionContent>
    </LeftBox>
    <RightBox>
      <SectionImage src='/static/images/mnetplus.png' alt='' />
    </RightBox>
  </Container>
);

export default MnetPlusSection;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  width: 100%;
  padding: 120px 110px;
`;

const RightBox = styled.div`
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
