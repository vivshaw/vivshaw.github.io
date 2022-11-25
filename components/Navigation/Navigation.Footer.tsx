import styled from "@emotion/styled";

import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";
import { author } from "@data";
import mediaqueries from "@styles/media";

const Footer: React.FC = () => {
  return (
    <>
      <Section narrow>
        <HoritzontalRule />
        <FooterContainer>
          <SocialLinks links={author.socials} />
        </FooterContainer>
      </Section>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 80px;
  color: ${(p) => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${(p) => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;
