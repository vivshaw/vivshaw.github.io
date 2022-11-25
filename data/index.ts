import avatarPic from "@images/avatar.jpg";
import type { IAuthor, TSocialSite } from "@types";

export const author: IAuthor = {
  avatar: {
    // TODO: Make this a Next image
    src: avatarPic.src,
    alt: "A photo of Hannah in a Smithsonian display of a giant salt molecule",
  },
  bio: "function enthusiast, JavaScript wrangler, browser whisperer, code obfuscator, machine enlightener",
  id: "vivshaw",
  name: "Hannah Shaw",
  profileLink: "/about",
  socials: [
    { name: "github", url: "https://github.com/vivshaw" },
    {
      name: "twitter",
      url: "https://twitter.com/vvvivshaw",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/hvivianshaw/",
    },
    { name: "mailto", url: "mailto:hvivianshaw@gmail.com" },
  ],
};

/**
 * Given an author and a desired social site, returns the corresponding URL if it's present.
 */
export const extractAuthorSocialUrlIfPresent = (
  author: IAuthor,
  social: TSocialSite
) => {
  // TODO: Why doesn't this possibly return `undefined`?
  const targetSocial = author.socials.find((item) => item.name === social);

  if (targetSocial) {
    return targetSocial.url;
  }

  return undefined;
};

export const site = {
  description: "Hannah Vivian Shaw's personal website & blog",
  name: "vivshaw.net",
  url: "https://vivshaw.net",
};
