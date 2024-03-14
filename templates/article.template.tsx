import { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import throttle from "lodash/throttle";
import { useColorMode } from "theme-ui";

import Layout from "@components/Layout";
import { MDXBody } from "@components/MDX/MDX";
import Section from "@components/Section";
import { Wordmark } from "@components/Logo/Logo";
import { author } from "@data";
import ArticleHero from "@sections/article/Article.Hero";
import ArticleControls from "@sections/article/Article.Controls";
import ArticlesNext from "@sections/article/Article.Next";
import ArticleSEO from "@sections/article/Article.SEO";
import mediaqueries from "@styles/media";
import type { IArticle } from "@types";
import { debounce } from "@utils";

// TODO: Remove these after `next` actually works!!
const fakeNextMetas: IArticle[] = [
  {
    title: "Build a Frankenstein Robot Brain, Teach It to Read Numbers",
    blurb: "Exploring computer vision with a from-scratch neural net in Scala",
    date: new Date("2017-02-04"),
    next: ["electric-pentameter", "build-you-a-tweetbot"],
    slug: "robot-brain-scala",
    tags: ["scala", "ml", "neural networks", "MNIST", "computer vision"],
  },
  {
    title: "Do Robots Dream of Electric Pentameter?",
    blurb: "Generative poetry with LSTM neural networks",
    date: new Date("2017-02-10"),
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
  const [colorMode] = useColorMode();
  const fill = colorMode === "dark" ? "#fff" : "#000";

  const next = fakeNextMetas.filter((article) => article.slug !== meta.slug);

  return (
    <Layout>
      <ArticleSEO article={meta} author={author} />
      <ArticleHero article={meta} author={author} />
      <MobileControls>
        <ArticleControls />
      </MobileControls>
      <ArticleBody>
        <MDXBody>{children}</MDXBody>
      </ArticleBody>
      {next.length > 0 && (
        <NextArticle narrow>
          <FooterNext>
            More articles from{" "}
            <Wordmark className="inlineWordmark" fill={fill} />
          </FooterNext>
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
  padding: 0 0 35px;
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

  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 4px;

  & .inlineWordmark {
    display: inline-block;
    height: 25px;
    position: relative;
    top: -2px;
  }

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  &::after {
    content: "";
    position: absolute;
    background: ${(p) => p.theme.colors.secondary};
    width: ${(750 / 1140) * 100}%;
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
