import React from "react";

/**
 * To soften the blur-up we get from the default configuration of gatbsy image
 * we're adding a CSS blur to the image. This makes it smoother!
 */
// const StyledGatsbyImag = styled(GatsbyImg)`
//   & > img {
//     filter: blur(8px);
//   }
// `;

/**
 * src can be one of 3 formats:
 *    * Gatsby fixed image props
 *    * Gatsby fluid image props
 *    * String
 * The component works out the best element to render. You can tell the difference
 * between fluid and fixed Gatsby imagaes by checking to see if a width and height property exist.
 *
 * @example
 * <Img src={...fixed Gatsby image} />
 * <Img src={...fluid Gatsby image} />
 * <Img src="https://..." />
 *
 * todo : lazyload the default img tag
 */
const Image = ({ src, alt, ...props }) => {
  // We're going to build our final component's props dynamically.
  // So create a nice default set of props that are relevant to Gatsby and non Gatsby images
  const imgProps = {
    alt,
    ...props,
  };

  // TODO : Find where you have src null returns
  if (!src) return null;

  // Now we need to calculate the prop that will set the src of the image.
  // This will either be src (for strings), fixed or fluid. Defaults to src
  const keyForSrc = "src";

  // todo : throw an exception if it is neither src nor fixed nor fluid

  // Now set either src, fixed or fluid to the src prop
  imgProps[keyForSrc] = src;

  // Retrun either the GatsbyImg component or a regular img tag with the spread props
  return <img {...imgProps} />;
};

export default Image;
