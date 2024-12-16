import Layout from "@components/Layout";
import { MDXBody } from "@components/MDX/MDX";
import Section from "@components/Section";
import SEO from "@components/SEO";
import type { IAuthor } from "@types";
import AboutHero from "./About.Hero";
import AboutContent from "./About.Content";

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
        <AboutHero author={author} />
        {shouldDisplayFullBio && (
          <AboutContent>
            <MDXBody>{children}</MDXBody>
          </AboutContent>
        )}
      </Section>
    </Layout>
  );
};

export default ArticlesPage;
