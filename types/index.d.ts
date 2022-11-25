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
    src: string;
  };
  bio: string;
  name: string;
  id: string;
  profileLink: string;
  socials: ISocialLink[];
}

export interface IArticle {
  slug: string;
  blurb: string;
  title: string;
  image: StaticImageData;
  date: Date;
}

export interface IProgress {
  height: number;
  offset: number;
  title: string;
  mode: string;
  onClose?: () => void;
}

export type Icon = React.FC<{
  fill?: string;
}>;
