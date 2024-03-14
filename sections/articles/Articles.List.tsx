import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

import Headings from "@components/Headings";
import mediaqueries from "@styles/media";
import type { IArticle } from "@types";
import { prettyPrintDate } from "@utils";

interface ArticlesListProps {
  articles: IArticle[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({
  articles
}) => (
  <ArticlesListContainer>
    {articles.map((article, idx) => <ArticlesListItem key={idx} article={article} />)}
  </ArticlesListContainer>
)

export default ArticlesList;

interface ArticlesListItemProps {
  article: IArticle;
  narrow?: boolean;
}

const ArticlesListItem: React.FC<ArticlesListItemProps> = ({ article, narrow }) => {
  const prettyDate = prettyPrintDate(article.date);
  const hasBlurb = article.blurb

  return (
    <ArticleLink href={`/blog/${article.slug}`} data-a11y="false">
      <Item>
        <Title dark>{article.title}</Title>
        {hasBlurb && <Blurb narrow={narrow}>{article.blurb}</Blurb  >}
        <Date>{prettyDate}</Date>
      </Item>
    </ArticleLink>
  )
}

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

const ArticlesListContainer = styled.div`
  transition: opacity 0.25s;
`;

const Item = styled.div`
  margin-bottom: 50px;

  @media (max-width: 540px) {
    background: ${(p) => p.theme.colors.card};
  }

  ${mediaqueries.phablet`
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 21px;
  font-family: ${(p) => p.theme.fonts.serif};
  margin-bottom: 10px;
  transition: color 0.3s ease-in-out;
  ${limitToTwoLines};

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;  
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
    padding: 30px 20px 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;

const Blurb = styled.p<{
  narrow: boolean;
}>`
  ${limitToTwoLines};
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.grey};
  display: box;
  max-width: ${(p) => (p.narrow ? "415px" : "515px")};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    margin-bottom: 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const Date = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${(p) => p.theme.colors.grey};
  opacity: 0.33;

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px 30px;
  `}
`;

const ArticleLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
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
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${(p) => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.phablet`
    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
