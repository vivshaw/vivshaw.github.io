import styled from "@emotion/styled";

import Layout from "@components/Layout";
import mediaqueries from "@styles/media";

const MainpageContent = styled.div`
  /**
  --padding-right: calc(env(safe-area-inset-right) + 80px);
  --padding-left: calc(env(safe-area-inset-left) + 80px);
  **/

  padding-right: calc(env(safe-area-inset-right) + 80px);
  padding-left: calc(env(safe-area-inset-right) + 80px);
  padding-bottom: 50px !important;
  padding-top: 80px !important;
  
  ${mediaqueries.tablet`
    /**
    --padding-right: calc(env(safe-area-inset-right) + 80px);
    --padding-left: calc(env(safe-area-inset-left) + 80px);
    **/

    padding-right: 24px;
    padding-left: 24px;
    padding-top: 40px;
  `}
`

const MainpageHeading = styled.div`
  font-family: 'orpheuspro', serif;
  font-weight: 400;
  line-height: 1.4;
  font-size: 62px;
  color: ${(p) => p.theme.colors.primary};
  margin-block-start: calc(0.83em + 32px);

  ${mediaqueries.tablet`
    font-size: 36px;
  `}
`

const MainpageLink = styled.a`
  color: ${(p) => p.theme.colors.accent};
  opacity: .7;
  transition: border-color .1s ease-in, opacity .1s ease-in;

  text-decoration: underline;
  text-decoration-color: ${(p) => p.theme.colors.accent};
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  
  &:hover {
    opacity: 1;
  }
`

/**
 * The index page for the blog. Lists all the articles.
 */
export default function Index() {
  return <Layout>
    <MainpageContent>
      <MainpageHeading>
        I'm Hannah Vivian Shaw. I dwell where machines and humans intersect.
      </MainpageHeading>
      <MainpageHeading>
        I enjoy teaching computers to be more human, sifting sense from data, building lovable tools, and cultivating flourishing engineering teams.
        Above all else, I value perpetual learning and boundless compassion.
      </MainpageHeading>
      <MainpageHeading>
        {/* TODO: These should be distinct internal and external links! */}
        To see what I do, visit <em><MainpageLink href="https://github.com/vivshaw">my GitHub</MainpageLink></em> for code, or <em><MainpageLink href="/blog">my blog</MainpageLink></em> for words.
        To read my more unfiltered thoughts on subjects ranging from engineering to philosophy, see <em><MainpageLink href="https://zettel.vivsha.ws">my digital garden</MainpageLink></em>.
      </MainpageHeading>
    </MainpageContent>
  </Layout>;
}
