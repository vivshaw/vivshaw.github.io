import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Link from "next/link"

import Headings from "@components/Headings"
import type { TArticle } from "@data"
import mediaqueries from "@styles/media"
import { prettyPrintDate } from "@utils"

interface ArticlesListProps {
  articles: TArticle[]
}

const BlogList: React.FC<ArticlesListProps> = ({ articles }) => (
  <BlogListContainer>
    {articles.map((article, idx) => (
      <BlogListItem key={idx} article={article} />
    ))}
  </BlogListContainer>
)

export default BlogList

interface BlogListItemProps {
  article: TArticle
  narrow?: boolean
}

const BlogListItem: React.FC<BlogListItemProps> = ({ article }) => {
  const prettyDate = prettyPrintDate(article.date)
  const hasBlurb = article.blurb

  return (
    <ArticleLink href={`/blog/${article.slug}`}>
      <Item>
        <Title>{article.title}</Title>
        {hasBlurb && <Blurb>{article.blurb}</Blurb>}
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
`

const BlogListContainer = styled.div`
  transition: opacity 0.25s;
`

const Item = styled.div`
  margin-bottom: 50px;
`

const Title = styled(Headings.h2)`
  font-size: 32px;
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 500;
  margin-bottom: 4px;
  transition: color 0.3s ease-in-out;
  ${limitToTwoLines};

  ${mediaqueries.desktop`
    font-size: 32px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;  
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
    padding: 0 20px;
    -webkit-line-clamp: 3;
  `}
`

const Blurb = styled.p`
  ${limitToTwoLines};
  font-family: ${(p) => p.theme.fonts.book};
  font-size: 20px;
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.grey};
  display: box;

  ${mediaqueries.phablet`
    padding:  0 20px;
    -webkit-line-clamp: 3;
  `}

  ${mediaqueries.tablet`
    font-size: 18px;
  `}
`

const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-family: ${(p) => p.theme.fonts.book};
  color: ${(p) => p.theme.colors.grey};
  opacity: 0.33;

  ${mediaqueries.phablet`
    padding:  0 20px;
  `}
`

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

  ${mediaqueries.phablet`
    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`
