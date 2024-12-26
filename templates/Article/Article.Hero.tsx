import styled from "@emotion/styled"

// TODO: Stop sharing the MDX headings like this!
import { headings } from "@components/MDX/Headings"
import type { TArticle } from "@data"
import { mediaqueries } from "@styles/media"
import { prettyPrintDate } from "@utils"

interface ArticleHeroProps {
  article: TArticle
}

/**
 * Displays the Hero section for a given Article, including title, author, and image.
 */
export function ArticleHero({ article }: ArticleHeroProps) {
  const prettyDate = prettyPrintDate(article.date)

  return (
    <Hero>
      <Header>
        <HeroHeading>{article.title}</HeroHeading>
        <HeroSubtitle>
          <ArticleMeta>{prettyDate}</ArticleMeta>
        </HeroSubtitle>
      </Header>
    </Hero>
  )
}

const Hero = styled.div``

const ArticleMeta = styled.div`
  margin-left: 0;

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin: 100px auto 70px;
  width: 100%;
  max-width: calc(749px - 68px);

  ${mediaqueries.desktop`
    max-width: calc(507px + 53px);
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 0px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 100px auto 0px;
    padding: 0 40px;
  `}

  @media screen and (max-height: 700px) {
    margin: 100px auto 0px;
  }
`

const HeroHeading = styled(headings.h1)`
  font-size: 48px;
  font-family: ${(p) => p.theme.fonts.serif};
  margin-bottom: 18px;
  line-height: 1.32;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`

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
`
