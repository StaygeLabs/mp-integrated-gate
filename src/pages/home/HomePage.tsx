import styled from '@emotion/styled';
import { mediaScreen } from 'components/cssToken/mediaScreen';
import GNBCommunity from 'components/navigation/GNBCommunity';
import { addImageQuery } from 'components/utils/addImageQuery';
import * as Colors from 'components/cssToken/colors';
import GlobalIcon from 'components/icons/GlobalIcon';
import { ArrowIcon } from 'components/icons';
import Footer from 'components/footer/Footer';
import * as Button from 'components/button';

function HomePage() {
  return (
    <ContainerWrap>
      <Container>
        <GNBCommunity
          height={70}
          leftSlot={
            <StyledKconLogo
              src={addImageQuery(`/static/icons/gnb-logo.png`)}
              alt='logo'
            />
          }
          rightSlot={
            <RightMenuSection>
              <Button.GnbButton text='서비스 문의' />
              <Button.GnbButton text='광고 문의' />
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
      </Container>
      <Footer />
    </ContainerWrap>
  );
}

export default HomePage;

const ContainerWrap = styled.div`
  background-color: white;
  position: relative;
  height: 100vh;
`;

const Container = styled.div`
  ${mediaScreen};
  background-color: white;
  position: relative;
  height: 100vh;
`;

const StyledKconLogo = styled.img`
  width: 145px;
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
