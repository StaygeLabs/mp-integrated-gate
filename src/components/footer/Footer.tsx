import { White } from 'components/cssToken/colors';
import { addImageQuery } from 'components/utils/addImageQuery';
import styled from '@emotion/styled';

import { CONFIG } from 'CONSTANT';
import { useTranslate } from 'store/locale/hooks/useTranslate';

interface FooterProps {
  className?: string;
}

type MergeProps = FooterProps;

const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  > :not(:last-child) {
    margin-right: 16px;
  }
  margin-right: 20px;
`;

const Link = styled.a`
  /* Default/b750 */

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  /* Grey / 600 */

  color: #757575;
  text-decoration: unset;

  cursor: pointer;
`;

const Meta = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  /* or 17px */

  /* gray/5 */
  white-space: pre-wrap;

  color: #b7b3bd;
  padding-right: 16px;
`;

const StyledFooter = styled.footer`
  padding-left: 20px;
  background-color: ${White};
  > :nth-of-type(1) {
    margin-bottom: 20px;
  }
  > :nth-of-type(2) {
    margin-bottom: 12px;
  }
  padding-bottom: 30px;
`;

function Footer(props: MergeProps) {
  const t = useTranslate();
  return (
    <StyledFooter className={props.className}>
      <img
        width={82}
        src={addImageQuery(
          `https://www.mnetplus.world/static/images/poc/kcon/enm-logo.png`,
          100,
        )}
        alt=''
      />
      <LinkGroup className='GTM__Footer'>
        <Link
          target='_blank'
          className='GTM__Terms'
          href={`${CONFIG.accountUrl}/cl/policy?target=terms`}
        >
          {t('.footer__terms-of-use')}
        </Link>
        <Link
          target='_blank'
          className='GTM__Privacy'
          href={`${CONFIG.accountUrl}/cl/policy?target=privacy`}
          style={{ fontWeight: 'bold' }}
        >
          {t('.footer__privacy-policy')}
        </Link>
        <Link
          target='_blank'
          className='GTM__Youth'
          href={`${CONFIG.accountUrl}/cl/policy?target=youth`}
        >
          {t('.footer__juvenile-protection-policy')}
        </Link>
        <Link
          target='_blank'
          href='https://mnet-plus.notion.site/mnet-plus/Mnet-Plus-AD-c918dddf0bd74971af0e687e78992a4f'
        >
          {t('.footer__contact')}
        </Link>
      </LinkGroup>
      <Meta>
        <div>{t('.footer__ceo')}</div>
        <div>{t('.footer__address')}</div>
        <div>{t('.footer__business-registration-no')}</div>
        <div>{t('.footer__personal-information-manager')}</div>
        <div>{t('.footer__hosting-service-provider')}</div>
      </Meta>
      <Meta>© CJ ENM. All Rights Reserved.</Meta>
    </StyledFooter>
  );
}

export default Footer;
