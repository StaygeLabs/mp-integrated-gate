import styled from '@emotion/styled';
import * as Colors from 'components/cssToken/colors';
import * as Button from 'components/button';
import { useTranslate } from 'store/locale/hooks/useTranslate';
import isMobile from 'store/utils/isMobile';

const PlusChatSection = () => {
  const t = useTranslate();
  const mobile = isMobile();
  return (
    <Container>
      {mobile ? (
        <>
          <SectionImage src='/static/images/pluschat.png' alt='' />
          <SectionTitle>
            {t('.mp.integrated.section.pluschat.title')}
          </SectionTitle>
          <SectionContent>
            {t('.mp.integrated.section.pluschat.content')}
          </SectionContent>
          <ButtonWrap>
            <Button.AppDownloadButton />
          </ButtonWrap>
        </>
      ) : (
        <>
          <LeftBox>
            <SectionImage src='/static/images/pluschat.png' alt='' />
          </LeftBox>
          <RightBox>
            <SectionTitle>
              {t('.mp.integrated.section.pluschat.title')}
            </SectionTitle>
            <SectionContent>
              {t('.mp.integrated.section.pluschat.content')}
            </SectionContent>
            <ButtonWrap>
              <Button.AppDownloadButton />
            </ButtonWrap>
          </RightBox>
        </>
      )}
    </Container>
  );
};

export default PlusChatSection;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.Neutral50};
  padding: 100px 110px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 80px 16px;
  }
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

  @media (max-width: 768px) {
    padding: 0 28px;
  }
`;

const SectionTitle = styled.h2`
  width: 100%;
  font-size: 42px;
  font-weight: 700;
  color: ${Colors.Neutral900};

  @media (max-width: 768px) {
    margin-top: 30px;
    white-space: pre-line;
    text-align: center;
    font-size: 32px;
    padding: 0 40px;
  }
`;

const SectionContent = styled.div`
  margin: 40px 0;
  width: 100%;
  font-size: 16px;
  color: ${Colors.Neutral700};

  @media (max-width: 768px) {
    margin: 30px 0;
    text-align: center;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
