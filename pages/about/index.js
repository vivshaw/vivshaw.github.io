import styled from "@emotion/styled";

import Layout from "@components/Layout";
import mediaqueries from "@styles/media";
import Link from "next/link";

const CenteringWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column
`

const MainpageContent = styled.div`
  /**
  --padding-right: calc(env(safe-area-inset-right) + 80px);
  --padding-left: calc(env(safe-area-inset-left) + 80px);
  **/

  max-width: 1440px;
  padding-right: calc(env(safe-area-inset-right) + 80px);
  padding-left: calc(env(safe-area-inset-right) + 80px);
  padding-bottom: 50px;
  padding-top: 80px;
  
  ${mediaqueries.tablet`
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 0px;
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

const MainpageA = styled.a`
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

const AboutList = styled.ul`
    padding-left: 64px;
    padding-top: 16px;
`

/**
 * The index page for the blog. Lists all the articles.
 */
export default function Index() {
  return <Layout>
    <CenteringWrapper>
      <MainpageContent>
        <MainpageHeading>
        I'm a human with an inexhaustible curiosity about the intersection of technology and human life. Currently, I'm an engineering manager at <MainpageA href="https://mercury.com" target="_blank">Mercury</MainpageA>, where I work on our frontend platform team.
        </MainpageHeading>
        
        <MainpageHeading>
          My professional interests are in:
          <AboutList>
            <li><em>human-computer interaction</em>, especially in the context of <em>developer tooling</em> or <em>frontend web applications</em>.</li>
            <li><em>platform engineering</em> (or <em>DevOps</em>, or <em>infrastructure engineering</em>, or whichever is the buzzword du jour).</li>
            <li><em>machine learning</em>, especially insofar as it intersects with the above.</li>
          </AboutList>
        </MainpageHeading>

        <MainpageHeading>
          (My amateur interests are many and cryptic. Ask me about heraldry sometime!)
        </MainpageHeading>

        <MainpageHeading>
        I'm an alumna of the University of Vermont, with a B.A. in Economics and Philosophy. When I'm not hacking on stuff, you'll generally find me reading weird fiction or philosophy, stir-frying things, watching Cronenberg films,
        or DJing techno sets. <MainpageA href="https://github.com/vivshaw/three-wise-monkeys">Obfuscated code</MainpageA> is a side hobby of mine.
        </MainpageHeading>

        <MainpageHeading>
          You can reach me at <MainpageA href="mailto:hey@vivsha.ws">hey@vivsha.ws</MainpageA>.
          I can sometimes be spotted in various other corners of the internet: <MainpageA href="https://mastodon.social/@vivshaw">the fediverse</MainpageA>, <MainpageA href="https://bsky.app/profile/vivshaw.bsky.social">Bluesky</MainpageA>, and wherever else you might see on <MainpageA href="https://keybase.io/vivshaw">my Keybase</MainpageA>.
        </MainpageHeading>
      </MainpageContent>
    </CenteringWrapper>
  </Layout>;
}
