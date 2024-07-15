import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';
import * as Button from 'components/button';
import { useTranslate } from 'store/locale/hooks/useTranslate';
import isMobile from 'store/utils/isMobile';

const MnetPlusSection = () => {
  const t = useTranslate();
  const mobile = isMobile();
  return (
    <Container>
      {mobile ? (
        <>
          <SectionImage src='/static/images/mnetplus.png' alt='' />
          <SectionTitle>
            {t('.mp.integrated.section.mnetplus.title')}
          </SectionTitle>
          <SectionContent>
            {t('.mp.integrated.section.mnetplus.content')}
          </SectionContent>
          <ButtonWrap>
            <Button.AppDownloadButton />
            <Button.WebButton linkUrl='https://www.mnetplus.world/ko/' />
          </ButtonWrap>
        </>
      ) : (
        <>
          <LeftBox>
            <SectionTitle>
              {t('.mp.integrated.section.mnetplus.title')}
            </SectionTitle>
            <SectionContent>
              {t('.mp.integrated.section.mnetplus.content')}
            </SectionContent>
            <ButtonWrap>
              <Button.AppDownloadButton />
              <Button.WebButton linkUrl='https://www.mnetplus.world/ko/' />
            </ButtonWrap>
          </LeftBox>
          <RightBox>
            <SectionImage src='/static/images/mnetplus.png' alt='' />
          </RightBox>
        </>
      )}
    </Container>
  );
};

export default MnetPlusSection;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
    padding-bottom: 80px;
  }
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
    padding: 0 60px;
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
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
