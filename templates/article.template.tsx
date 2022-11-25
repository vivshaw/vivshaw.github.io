import { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import throttle from "lodash/throttle";
import Head from "next/head";

import Layout from "@components/Layout";
import { MDXBody } from "@components/MDX/MDX";
import Progress from "@components/Progress";
import Section from "@components/Section";
import { author, site } from "@data";
import ArticleAside from "@sections/article/Article.Aside";
import ArticleHero from "@sections/article/Article.Hero";
import ArticleControls from "@sections/article/Article.Controls";
import ArticlesNext from "@sections/article/Article.Next";
import ArticleSEO from "@sections/article/Article.SEO";
import mediaqueries from "@styles/media";
import type { IArticle } from "@types";
import { debounce } from "@utils";

// TODO: Remove these after `next` actually works!!
import scalaImage from "@pages/blog/robot-brain-scala/muneeb-syed-x9NfeD3FpsE-unsplash.jpg";
import pentameterImage from "@pages/blog/electric-pentameter/jaimie-phillips-KamSS2euCzA-unsplash.jpg";
const fakeNextMetas: IArticle[] = [
  {
    title: "Build a Frankenstein Robot Brain, Teach It to Read Numbers",
    blurb: "Exploring computer vision with a from-scratch neural net in Scala",
    date: new Date("2017-02-04"),
    image: { alt: "green leafed plants", src: scalaImage },
    next: ["electric-pentameter", "build-you-a-tweetbot"],
    slug: "robot-brain-scala",
    tags: ["scala", "ml", "neural networks", "MNIST", "computer vision"],
  },
  {
    title: "Do Robots Dream of Electric Pentameter?",
    blurb: "Generative poetry with LSTM neural networks",
    date: new Date("2017-02-10"),
    image: { alt: "green ovate leaves with dew drops", src: pentameterImage },
    next: ["robot-brain-scala", "build-you-a-tweetbot"],
    slug: "electric-pentameter",
    tags: ["python", "ml", "LSTM", "neural networks", "keras"],
  },
];

/**
 * Template for a single blog post.
 */
const Article = ({
  children,
  meta,
}: {
  children?: React.ReactNode;
  meta: IArticle;
}) => {
  const contentSectionRef = useRef<HTMLElement>(null);

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const calculateBodySize = throttle(() => {
      const contentSection = contentSectionRef.current;

      if (!contentSection) return;

      /**
       * If we haven't checked the content's height before,
       * we want to add listeners to the content area's
       * imagery to recheck when it's loaded
       */
      if (!hasCalculated) {
        const debouncedCalculation = debounce(calculateBodySize);
        const $imgs = contentSection.querySelectorAll("img");

        $imgs.forEach(($img) => {
          // If the image hasn't finished loading then add a listener
          if (!$img.complete) $img.onload = debouncedCalculation;
        });

        // Prevent rerun of the listener attachment
        setHasCalculated(true);
      }

      // Set the height and offset of the content area
      setContentHeight(contentSection.getBoundingClientRect().height);
    }, 20);

    calculateBodySize();
    window.addEventListener("resize", calculateBodySize);

    return () => window.removeEventListener("resize", calculateBodySize);
  }, []);

  const next = fakeNextMetas.filter((article) => article.slug !== meta.slug);

  return (
    <Layout>
      <ArticleSEO article={meta} author={author} />
      <ArticleHero article={meta} author={author} />
      <ArticleAside contentHeight={contentHeight}>
        <Progress contentHeight={contentHeight} />
      </ArticleAside>
      <MobileControls>
        <ArticleControls />
      </MobileControls>
      <ArticleBody ref={contentSectionRef}>
        <MDXBody>{children}</MDXBody>
      </ArticleBody>
      {next.length > 0 && (
        <NextArticle narrow>
          {/** TODO: that `site.name` should be the logo, would look iller */}
          <FooterNext>More articles from {site.name}</FooterNext>
          <ArticlesNext articles={next} />
          <FooterSpacer />
        </NextArticle>
      )}
    </Layout>
  );
};

export default Article;

const MobileControls = styled.div`
  position: relative;
  padding-top: 60px;
  transition: background 0.2s linear;
  text-align: center;

  ${mediaqueries.tablet_up`
    display: none;
  `}
`;

const ArticleBody = styled.article`
  position: relative;
  padding: 160px 0 35px;
  padding-left: 68px;
  transition: background 0.2s linear;

  ${mediaqueries.desktop`
    padding-left: 53px;
  `}

  ${mediaqueries.tablet`
    padding: 70px 0 80px;
  `}

  ${mediaqueries.phablet`
    padding: 60px 0;
  `}
`;

const NextArticle = styled(Section)`
  display: block;
`;

const FooterNext = styled.h3`
  position: relative;
  opacity: 0.25;
  margin-bottom: 100px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  &::after {
    content: "";
    position: absolute;
    background: ${(p) => p.theme.colors.grey};
    width: ${(910 / 1140) * 100}%;
    height: 1px;
    right: 0;
    top: 11px;

    ${mediaqueries.tablet`
      width: ${(600 / 1140) * 100}%;
    `}

    ${mediaqueries.phablet`
      width: ${(400 / 1140) * 100}%;
    `}

    ${mediaqueries.phone`
      width: 90px
    `}
  }
`;

const FooterSpacer = styled.div`
  margin-bottom: 65px;
`;
