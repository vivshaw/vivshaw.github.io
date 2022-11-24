import styled from "@emotion/styled";
import { ThemeProvider } from "theme-ui";
import { ColorModeProvider } from "@theme-ui/color-modes";

import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";
import Section from "@components/Section";
import SEO from "@components/SEO";
import ArticlesHero from "@sections/articles/Articles.Hero";
import ArticlesList from "@sections/articles/Articles.List";
import { IArticle } from "@types";
import theme from "@theme";

const ArticlesPage = ({ articles }: { articles: IArticle[] }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
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
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default ArticlesPage;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${(p) => p.show && `margin-top: 95px;`}
`;
