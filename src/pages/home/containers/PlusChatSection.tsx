import styled from '@emotion/styled';
import * as Colors from 'components/cssToken/colors';
import * as Button from 'components/button';

const PlusChatSection = () => (
  <Container>
    <LeftBox>
      <SectionImage src='/static/images/pluschat.png' alt='' />
    </LeftBox>
    <RightBox>
      <SectionTitle>Plus Chat</SectionTitle>
      <SectionContent>
        {`Plus Chat 은 KPOP 아티스트와 글로벌 팬이 언제 어디서나 실시간으로 밀도있게
소통하는 통합 팬 커뮤니케이션 플랫폼으로
팬 커뮤니티, 1:1 유료 채팅 (Chat), 공식 팬클럽, 앨범/MD 판매 등 아티스트 활동의 전반적인 내용을 언제나 함께 할 수 있도록 돕고 있습니다.
`}
      </SectionContent>
      <ButtonWrap>
        <Button.AppDownloadButton />
        <Button.WebButton linkUrl='https://www.mnetplus.world/ko/' />
      </ButtonWrap>
    </RightBox>
  </Container>
);

export default PlusChatSection;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.Neutral50};
  padding: 0 110px;
`;

const LeftBox = styled.div`
  width: 100%;
  padding: 100px 0;
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
  margin: 40px 0;
  width: 100%;
  font-size: 16px;
  color: ${Colors.Neutral700};
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;
