import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

import Headings from "@components/Headings";
import type { TArticle } from "@data";
import mediaqueries from "@styles/media";
import { prettyPrintDate } from "@utils";

interface ArticlesNextProps {
  /**
   * Articles to display in the Next Articles block.
   * If the list is empty, we won't display this block at all!
   */
  articles: TArticle[];
}

/**
 * Sits at the bottom of our Article page. Shows the next 2 on desktop and the
 * next 1 on mobile!
 *
 *  [..............], [.........]
 *  [.....LONG.....], [..SHORT..]
 *  [..............], [.........]
 *
 * This does NOT use Articles.List because there's a special case of only have 1 article
 * as the next one suggested article, which requires special styling we didn't want to
 * mix into the generic list component.
 */
const ArticlesNext: React.FC<ArticlesNextProps> = ({ articles }) => {
  const numberOfArticles = articles.length;

  if (numberOfArticles < 1) {
    return null;
  }

  const showTwoArticles = numberOfArticles > 1;

  return (
    <Grid numberOfArticles={numberOfArticles}>
      <GridItem article={articles[0]} />
      {showTwoArticles && <GridItem article={articles[1]} narrow />}
    </Grid>
  );
};

export default ArticlesNext;

interface GridItemProps {
  /**
   * The Article to display in this grid item.
   */
  article: TArticle;

  /**
   * Whether this article should be the narrow or the wider one it its row.
   *
   * @default false
   */
  narrow?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ article, narrow }) => {
  const prettyDate = prettyPrintDate(article.date);

  return (
    <ArticleLink
      href={article.slug}
      data-a11y="false"
      narrow={narrow ? "true" : "false"}
    >
      <Item>
        <Title dark>
          {article.title}
        </Title>
        <Excerpt>{article.blurb}</Excerpt>
        <MetaData>{prettyDate}</MetaData>
      </Item>
    </ArticleLink>
  );
};

const wide = "1fr";
const narrow = "457px";

const Grid = styled.div<{ numberOfArticles: number }>`
  position: relative;
  display: grid;
  ${(p) => {
    if (p.numberOfArticles === 1) {
      return `
      grid-template-columns: 1fr;
      grid-template-rows: 1
    `;
    } else {
      return `
      grid-template-columns: ${wide} ${narrow};
      grid-template-rows: 2;
      `;
    }
  }}
  column-gap: 30px;
  margin: 0 auto;
  max-width: ${(p) => (p.numberOfArticles === 1 ? "680px" : "100%")};

  ${mediaqueries.desktop`
    grid-template-columns: 1fr 1fr;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;

const Item = styled.div`
  position: relative;
`;

const Title = styled(Headings.h3)`
  font-size: 22px;
  line-height: 1.4;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.fonts.serif};
  transition: color 0.3s ease-in-out;

  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}
  ${mediaqueries.phablet`
    padding: 0 20px 0;
    margin-bottom: 10px;
  `}
`;

const Excerpt = styled.p<{ narrow?: boolean; }>`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.grey};
  max-width: ${(p) => (p.narrow ? "415px" : "515px")};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const MetaData = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${(p) => p.theme.colors.grey};
  opacity: 0.33;

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px 30px;
  `}
`;

const ArticleLink = styled(Link)<{ narrow: string }>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover h2,
  &:focus h2 {
    color: ${(p) => p.theme.colors.accent};
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -2%;
    top: -2%;
    width: 104%;
    height: 104%;
    border: 3px solid ${(p) => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
  }

  ${(p) => p.narrow === "true" && mediaqueries.tablet`display: none;`}

  ${mediaqueries.phablet`
    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
