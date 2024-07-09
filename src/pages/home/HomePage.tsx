import styled from '@emotion/styled';
import { mediaScreen } from 'components/cssToken/mediaScreen';
import GNBCommunity from 'components/navigation/GNBCommunity';
import { addImageQuery } from 'components/utils/addImageQuery';

function HomePage() {
  return (
    <Container>
      <GNBCommunity
        leftSlot={
          <StyledKconLogo
            src={addImageQuery(`/static/icons/gnb-logo.png`)}
            alt=''
          />
        }
        rightSlot={
          <RightMenuSection>
            <ServiceButton>서비스 문의</ServiceButton>
          </RightMenuSection>
        }
        box
        removeAnimation
        removeHiddenOverflow
      />
    </Container>
  );
}

export default HomePage;

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
  width: 145px;
`;

const ServiceButton = styled.div`
  width: 145px;
`;
