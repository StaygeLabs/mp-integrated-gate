import styled from '@emotion/styled';
import * as Colors from 'components/cssToken/colors';
import { mediaScreen } from 'components/cssToken/mediaScreen';
import { Caption13R } from 'components/fonts/captions';
import { InstagramIcon, XIcon } from 'components/icons';
import YoutubeIcon from 'components/icons/YoutubeIcon';
import { useTranslate } from 'store/locale/hooks/useTranslate';

interface FooterProps {
  className?: string;
}

type MergeProps = FooterProps;

function Footer(props: MergeProps) {
  const t = useTranslate();
  return (
    <FooterWrap>
      <StyledFooter className={props.className}>
        <img width={145} src='static/icons/footer-logo.png' alt='footer-logo' />

        <SecondLine>
          <Meta>
            <div>{t('.footer__ceo')}</div>
            <div>{t('.footer__address')}</div>
            <div>{t('.footer__business-registration-no')}</div>
            <div>{t('.footer__personal-information-manager')}</div>
            <div>{t('.footer__hosting-service-provider')}</div>
          </Meta>
          <ContactWrap>
            <Contact>
              <SecondLineTitle>Contact us</SecondLineTitle>
              <ContactText>서비스 문의</ContactText>
              <ContactText>광고 문의</ContactText>
            </Contact>
            <Follow>
              <SecondLineTitle>Follow Mnet Plus</SecondLineTitle>
              <SnsWrap>
                <SnsBox>
                  <InstagramIcon color={Colors.Neutral900} />
                </SnsBox>
                <SnsBox>
                  <YoutubeIcon color={Colors.Neutral900} />
                </SnsBox>
                <SnsBox>
                  <XIcon color={Colors.Neutral900} />
                </SnsBox>
              </SnsWrap>
            </Follow>
          </ContactWrap>
        </SecondLine>
        <FooterBorder />
        <Meta>© CJ ENM. All Rights Reserved.</Meta>
      </StyledFooter>
    </FooterWrap>
  );
}

export default Footer;

const Meta = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  white-space: pre-wrap;
  color: ${Colors.Neutral600};
`;

const SecondLineTitle = styled.div`
  margin-bottom: 16px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  color: ${Colors.Neutral900};
`;

const StyledFooter = styled.div`
  ${mediaScreen};
  background-color: ${Colors.Neutral50};
  padding: 75px 110px;
`;

const FooterWrap = styled.footer`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: ${Colors.Neutral50};
`;

const ContactWrap = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
`;

const Contact = styled.div`
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const SnsWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const SnsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: ${Colors.Neutral200};
  border-radius: 8px;
  & + & {
    margin-left: 12px;
  }
`;

const FooterBorder = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: ${Colors.Neutral200};
`;

const SecondLine = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ContactText = styled.div`
  margin-bottom: 12px;
  ${Caption13R};
  color: ${Colors.Neutral900};
`;
