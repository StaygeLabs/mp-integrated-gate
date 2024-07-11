import styled from '@emotion/styled';
import { mediaScreen } from 'components/cssToken/mediaScreen';
import GNBCommunity from 'components/navigation/GNBCommunity';
import { addImageQuery } from 'components/utils/addImageQuery';
import * as Colors from 'components/cssToken/colors';
import { Caption12R } from 'components/fonts/captions';
import GlobalIcon from 'components/icons/globalIcon';

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
            <AdServiceButton>광고 문의</AdServiceButton>
            <GlobalButton>
              <GlobalIcon color={Colors.Neutral700} />
            </GlobalButton>
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
  display: flex;
  gap: 16px;
`;

const ServiceButton = styled.div`
  padding: 7px 16px;
  border-radius: 50px;
  background-color: ${Colors.Neutral100};
  ${Caption12R};
  white-space: nowrap;
  cursor: pointer;
`;

const AdServiceButton = styled.div`
  padding: 7px 16px;
  border-radius: 50px;
  background-color: ${Colors.Neutral100};
  ${Caption12R};
  white-space: nowrap;
  cursor: pointer;
`;

const GlobalButton = styled.div`
  padding: 7px 16px;
  border-radius: 50px;
  background-color: ${Colors.Neutral100};
  ${Caption12R};
  white-space: nowrap;
  cursor: pointer;
`;
