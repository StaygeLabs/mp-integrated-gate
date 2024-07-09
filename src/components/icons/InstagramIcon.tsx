import { ReactComponent as Instagram } from '@components/images/icon_instagram.svg';
import styled from '@emotion/styled';

const InstagramIcon = styled(Instagram)`
  color: ${({ color }) => color || 'white'};
`;

export default InstagramIcon;
