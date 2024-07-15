import styled from '@emotion/styled';
import { mediaScreen } from 'components/cssToken/mediaScreen';
import GNBCommunity from 'components/navigation/GNBCommunity';
import { addImageQuery } from 'components/utils/addImageQuery';
import * as Colors from 'components/cssToken/colors';
import GlobalIcon from 'components/icons/GlobalIcon';
import { ArrowIcon } from 'components/icons';
import Footer from 'components/footer/Footer';
import * as Button from 'components/button';
import isMobile from 'store/utils/isMobile';
// import * as Section from './containers';

function HomePage() {
  const mobile = isMobile();

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
                  <Button.GnbButton text='서비스 문의' />
                  <Button.GnbButton text='광고 문의' />
                </>
              )}
              <GlobalButton>
                <GlobalIcon color={Colors.Neutral700} />
                <ArrowIcon color={Colors.Neutral700} />
              </GlobalButton>
            </RightMenuSection>
          }
          box
          removeAnimation
          removeHiddenOverflow
        />
        <Main>
          {/* <Section.MainBannerCarouselSection />
          <Section.MnetPlusSection />
          <Section.PlusChatSection />
          <Section.PlustConSection /> */}
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
  gap: 16px;
`;

const GlobalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
