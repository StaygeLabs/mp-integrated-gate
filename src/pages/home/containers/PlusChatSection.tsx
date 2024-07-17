import styled from '@emotion/styled';
import * as Colors from 'components/cssToken/colors';
import * as Button from 'components/button';
import { useTranslate } from 'store/locale/hooks/useTranslate';
import isMobile from 'store/utils/isMobile';
import { Locale } from 'store/locale/types';
import { QRModal } from 'components/modal/QRModal';
import { useLocale } from 'store/locale/hooks/useLocale';
import { Body16R } from 'components/fonts/bodys';
import { MNET_PLUS_APP_URL } from 'CONSTANT';

const PlusChatSection = () => {
  const t = useTranslate();
  const mobile = isMobile();
  const locale = useLocale();

  const handleClickDownload = () => {
    const text: { [key in Locale]: string[] } = {
      ko: ['QR 코드를 스캔하여', 'Plus Chat 앱을 다운로드 해주세요'],
      en: ['Please scan the QR code', 'to download the Plus Chat app'],
      ja: [
        'QRコードをスキャンして、',
        'Plus Chatアプリをダウンロードしてください。',
      ],
      'zh-cn': ['Please scan the QR code', 'to download the Plus Chat app'],
      'zh-tw': ['Please scan the QR code', 'to download the Plus Chat app'],
    };
    if (!mobile) {
      QRModal({
        title: 'Plus Chat',
        imageUrl: '/static/images/pc-qr.png',
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
          <SectionImage src='/static/images/pluschat.png' alt='' />
          <SectionTitle>
            {t('.mp.integrated.section.pluschat.title')}
          </SectionTitle>
          <SectionContent>
            {t('.mp.integrated.section.pluschat.content')}
          </SectionContent>
          <ButtonWrap>
            <Button.AppDownloadButton
              mobileApple={MNET_PLUS_APP_URL.apple}
              mobileGoogle={MNET_PLUS_APP_URL.google}
            />
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
              <Button.AppDownloadButton onClick={handleClickDownload} />
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
  ${Body16R};

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
