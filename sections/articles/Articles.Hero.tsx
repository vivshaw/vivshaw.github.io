import styled from "@emotion/styled";

import Section from "@components/Section";
import Bio from "@components/Bio";
import { author } from "@data";
import mediaqueries from "@styles/media";

const ArticlesHero = () => {
  const featuredAuthor = author;

  return (
    <Section id="Articles__Hero">
      <HeadingContainer style={{ maxWidth: `652px` }}>
        <HeroHeading>
          Welcome to my wretched hive of scum and villainy!✌️
        </HeroHeading>
      </HeadingContainer>
      <SubheadingContainer>
        <Bio author={featuredAuthor} />
      </SubheadingContainer>
    </Section>
  );
};

export default ArticlesHero;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
  `};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `};

  ${mediaqueries.phablet`
    display: none;
  `};
`;

const HeadingContainer = styled.div`
  margin: 100px 0;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${(p) => p.theme.colors.primary};

  a {
    color: ${(p) => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;
