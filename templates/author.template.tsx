import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import AuthorHero from "@sections/author/Author.Hero";
import AuthorAbout from "@sections/author/Author.About";
import { IAuthor } from "@types";
import { MDXBody } from "@components/MDX/MDX";

interface IArticlesPageProps {
  /** Author to display info for */
  author: IAuthor;

  /**
   * Full biography for the author.
   * This is passed as `children` so you can easily use an MDX page to
   * write the bio, and simply pass it in as a child.
   */
  children?: React.ReactNode;
}

/**
 * Page template for an Author page.
 */
const ArticlesPage: React.FC<IArticlesPageProps> = ({ author, children }) => {
  // TODO: slap in an `isNil` util for cases like this
  const shouldDisplayFullBio = !!children;

  return (
    <Layout>
      <SEO title={author.name} description={author.bio} />
      <Section narrow>
        <AuthorHero author={author} />
        {shouldDisplayFullBio && (
          <AuthorAbout>
            <MDXBody>{children}</MDXBody>
          </AuthorAbout>
        )}
      </Section>
    </Layout>
  );
};

export default ArticlesPage;
