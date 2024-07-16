import styled from '@emotion/styled';
import { mediaScreen } from 'components/cssToken/mediaScreen';
import GNBCommunity from 'components/navigation/GNBCommunity';
import { addImageQuery } from 'components/utils/addImageQuery';
import Footer from 'components/footer/Footer';
import * as Button from 'components/button';
import isMobile from 'store/utils/isMobile';
import { useTranslate } from 'store/locale/hooks/useTranslate';
import * as Section from './containers';

function HomePage() {
  const mobile = isMobile();
  const t = useTranslate();

  return (
    <ContainerWrap>
      <Container>
        <GNBCommunity
          height={mobile ? 52 : 70}
          leftSlot={
            <StyledKconLogo
              src={addImageQuery(`/static/icons/gnb-logo.png`)}
              alt='logo'
            />
          }
          rightSlot={
            <RightMenuSection>
              {!mobile && (
                <>
                  <Button.GnbButton
                    text={t('.mp.integrated.gnb.service')}
                    onClick={() =>
                      window.open(
                        'https://mnetplus.zendesk.com/hc/ko/requests/new',
                        '_blank',
                      )
                    }
                  />
                  <Button.GnbButton
                    text={t('.mp.integrated.gnb.ad')}
                    onClick={() =>
                      window.open(
                        'https://mnet-plus.notion.site/Mnet-Plus-AD-c918dddf0bd74971af0e687e78992a4f',
                        '_blank',
                      )
                    }
                  />
                </>
              )}
              <Button.GlobalButton />
            </RightMenuSection>
          }
          box
          removeAnimation
          removeHiddenOverflow
        />
        <Main>
          <Section.MainBannerCarouselSection />
          <Section.MnetPlusSection />
          <Section.PlusChatSection />
          <Section.PlustConSection />
        </Main>
      </Container>
      <Footer />
    </ContainerWrap>
  );
}

export default HomePage;

const ContainerWrap = styled.div`
  background-color: white;
  position: relative;
`;

const Container = styled.div`
  ${mediaScreen};
  background-color: white;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledKconLogo = styled.img`
  width: 145px;

  @media (max-width: 768px) {
    width: 130px;
  }
`;

const RightMenuSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Main = styled.main`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 52px;
  }
`;
