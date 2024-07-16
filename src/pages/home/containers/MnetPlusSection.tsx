import styled from '@emotion/styled';
import React from 'react';
import * as Colors from 'components/cssToken/colors';
import * as Button from 'components/button';
import { useTranslate } from 'store/locale/hooks/useTranslate';
import isMobile from 'store/utils/isMobile';
import { QRModal } from 'components/modal/QRModal';
import { useLocale } from 'store/locale/hooks/useLocale';
import { Locale } from 'store/locale/types';
import { Body16R } from 'components/fonts/bodys';

const MnetPlusSection = () => {
  const t = useTranslate();
  const mobile = isMobile();
  const locale = useLocale();

  const handleClickDownload = () => {
    const text: { [key in Locale]: string[] } = {
      ko: ['QR 코드를 스캔하여', 'Mnet Plus 앱을 다운로드 해주세요'],
      en: ['Please scan the QR code', 'to download the Mnet Plus app'],
      ja: [
        'QRコードをスキャンして、',
        'MnetPlusアプリをダウンロードしてください。',
      ],
      'zh-cn': ['Please scan the QR code', 'to download the Mnet Plus app'],
      'zh-tw': ['Please scan the QR code', 'to download the Mnet Plus app'],
    };
    if (!mobile) {
      QRModal({
        title: 'Mnet Plus',
        imageUrl: '/static/images/mp-qr.png',
        textList: text[locale as Locale],
      });
    } else {
      // window.open(linkUrl);
      // 딥링크 주소 받기
    }
  };

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
              <Button.AppDownloadButton onClick={handleClickDownload} />
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
  ${Body16R};

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
