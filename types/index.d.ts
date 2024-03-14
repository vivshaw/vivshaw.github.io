import type { ImageProps, StaticImageData } from "next/image";

export interface IPaginator {
  pageCount: number;
  index: number;
  pathPrefix: string;
}

export type TSocialSite =
  | "linkedin"
  | "twitter"
  | "facebook"
  | "instagram"
  | "github"
  | "notion"
  | "mailto"
  | "url";

export interface ISocialLink {
  name: TSocialSite;
  url: string;
}

export interface IAuthor {
  avatar: {
    alt: string;
    src: StaticImageData;
  };
  bio: string;
  name: string;
  id: string;
  profileLink: string;
  socials: ISocialLink[];
}

export interface IArticle {
  title: string;
  slug: string;
  date: Date;

  blurb: string;
  next?: string[];
  tags: string[];
}

export type Icon = React.FC<{
  className?: string;
  fill?: string;
}>;
