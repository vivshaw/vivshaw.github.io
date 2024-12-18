import styled from "@emotion/styled";
import { css } from "@emotion/react";

import mediaqueries from "@styles/media";

// TODO: Fix jacked highlight colors
// TODO: Add line numbers
const IMAGE_WIDTHS = {
  regular: "680px",
  large: "1004px",
  full: "100vw",
};

const HeadingsCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1,
  h1 *,
  h2,
  h2 * {
    margin: 25px 0 18px;

    ${mediaqueries.tablet`
      margin: 30px 0 18px;
    `};
  }

  h3,
  h3 * {
    margin: 20px 0 10px;
  }
`;

const PrismCSS = (p) => css`
  .prism-code {
    overflow: auto;
    width: 100%;
    padding: 32px;
    font-size: 13px;
    margin: 15px auto 50px;
    border-radius: 5px;
    font-family: ${p.theme.fonts.monospace};

    .token-line {
      border-left: 3px solid transparent;

      & > span {
      }
    }

    .number-line {
      display: inline-block;
      width: 32px;
      user-select: none;
      opacity: 0.3;
      color: #dcd9e6;

      ${mediaqueries.tablet`
        opacity: 0;
        width: 0;
      `};
    }

    .token-line.highlight-line {
      margin: 0 -32px;
      padding: 0 32px;
      background: ${p.theme.colors.prism.highlight};
      border-left: 3px solid ${p.theme.colors.prism.highlightBorder};

      ${mediaqueries.tablet`
        margin: 0 -20px;
        padding: 0 20px;
      `};
    }

    .operator + .maybe-class-name {
      color: #ffcf74 !important;
    }

    .plain ~ .operator {
      color: #ffffff !important;
    }

    ${mediaqueries.phablet`
      text-size-adjust: none;
      border-radius: 0;
      margin: 0 auto 25px;
      padding: 25px 20px;
      overflow: initial;
      width: unset;
      max-width: unset;
      float: left;
      min-width: 100%;
      overflow: initial;
      position: relative;
    `};
  }
`;

const ImageCSS = css`
  img {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;

    ${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};
  }

  div.Image__Small {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;
    width: 100%;
    max-width: 680px;

    ${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};

    ${mediaqueries.desktop`
      max-width: 507px;
    `}

    ${mediaqueries.tablet`
      max-width: 486px;
      margin: 0 auto 25px;
    `};

    ${mediaqueries.phablet`
      padding: 0 20px;
    `};
  }

  .Image__Container {
    text-align: center;
  }

  img.Image__With-Shadow {
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.15);
  }

  div.Image__Medium {
    position: relative;
    margin: 15px auto 50px;
    width: 100%;
    max-width: ${IMAGE_WIDTHS.large};

    ${mediaqueries.desktop_medium`
      left: -34px;
    `};

    ${mediaqueries.desktop`
      left: -26px;
    `};

    ${mediaqueries.tablet`
      border-radius: 0;
      left: 0;
      margin: 0 auto 25px;

      img {
        border-radius: 0;
      }
    `};
  }

  div.Image__Large {
    position: relative;
    left: -68px;
    width: ${IMAGE_WIDTHS.full};
    margin: 25px auto 60px;
    pointer-events: none;

    /* To allow interaction for all external interactions: YouTube, Twitter, Gist */
    iframe {
      pointer-events: all;
    }

    img {
      border-radius: 0;
    }

    ${mediaqueries.desktop`
      left: -53px;
    `};

    ${mediaqueries.tablet`
      left: 0;
      margin: 0 auto 25px;
    `};
  }
`;

/**
 * MDXBody
 * Here we're applying "global" selectors to make sure we maintain an article
 * body type feel. We're also applying all the Prism selectors and styles within
 * the MDXBody.
 */
export const MDXBody = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${HeadingsCSS}
  ${PrismCSS}
  ${ImageCSS}

  code {
    font-family: ${p => p.theme.fonts.monospace};
    background: ${p => p.theme.colors.prism.highlight};
    border-radius: 8px;
    padding: 2px 4px;
  }
`;
