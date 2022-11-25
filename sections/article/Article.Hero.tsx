import styled from "@emotion/styled";
import Image from "next/image";

import Headings from "@components/Headings";
import ArticleAuthor from "@sections/article/Article.Authors";
import mediaqueries from "@styles/media";
import type { IArticle, IAuthor } from "@types";
import { getBreakpointFromTheme, prettyPrintDate } from "@utils";

interface ArticleHeroProps {
  article: IArticle;
  author: IAuthor;
}

/**
 * Displays the Hero section for a given Article, including title, author, and image.
 */
const ArticleHero: React.FC<ArticleHeroProps> = ({ article, author }) => {
  const prettyDate = prettyPrintDate(article.date);

  return (
    <Hero>
      <Header>
        <HeroHeading>{article.title}</HeroHeading>
        <HeroSubtitle>
          <ArticleAuthor author={author} />
          <ArticleMeta>{prettyDate}</ArticleMeta>
        </HeroSubtitle>
      </Header>

      {/** This absolute ID is used in Article.Aside */}
      <HeroImage id="ArticleImage__Hero">
        <Image
          alt={article.image.alt}
          fill
          placeholder="blur"
          priority
          sizes={`(max-width: ${getBreakpointFromTheme("phablet")}px) 100vw,
                 (max-width: ${getBreakpointFromTheme("tablet")}px) 100vw,
                 944px`}
          src={article.image.src}
        />
      </HeroImage>
    </Hero>
  );
};

export default ArticleHero;

const Hero = styled.div`
  ${(p) => mediaqueries.phablet`
    &::before {
      content: "";
      width: 100%;
      height: 20px;
      background: ${p.theme.colors.primary};
      position: absolute;
      left: 0;
      top: 0;
      transition: ${p.theme.colorModeTransition};
    }

    &::after {
      content: "";
      width: 100%;
      height: 10px;
      background: ${p.theme.colors.background};
      position: absolute;
      left: 0;
      top: 10px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      transition: ${p.theme.colorModeTransition};
    }
  `}
`;

const ArticleMeta = styled.div`
  margin-left: 0;

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin: 100px auto 120px;
  padding-left: 68px;
  max-width: 749px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 170px auto 180px;
    padding: 0 40px;
  `}

  @media screen and (max-height: 700px) {
    margin: 100px auto;
  }
`;

const HeroHeading = styled(Headings.h1)`
  font-size: 48px;
  font-family: ${(p) => p.theme.fonts.serif};
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroSubtitle = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;
  color: ${(p) => p.theme.colors.grey};

  ${(p) => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;

    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

// TODO: Fix image height on mobile!!
const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 944px;
  height: 426px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);

  & > img {
    object-fit: cover;
  }

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: calc(100vw - 40px);
    height: 220px;

    & > div {
      height: 220px;
    }
`}
`;
