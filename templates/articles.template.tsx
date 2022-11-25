import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";
import Section from "@components/Section";
import SEO from "@components/SEO";
import ArticlesHero from "@sections/articles/Articles.Hero";
import ArticlesList from "@sections/articles/Articles.List";
import type { IArticle } from "@types";

/**
 * Template for a list of blog posts. Currently just used for the index page.
 * In future, will be used for the tags pages.
 */
const ArticlesPage = ({ articles }: { articles: IArticle[] }) => {
  return (
    <Layout>
      <SEO />
      <ArticlesHero />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={false}>
          <Paginator pageCount={1} pathPrefix="/" index={1} />
        </ArticlesPaginator>
      </Section>
    </Layout>
  );
};

export default ArticlesPage;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${(p) => p.show && `margin-top: 95px;`}
`;
