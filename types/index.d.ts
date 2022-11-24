import { ImageProps, StaticImageData } from "next/image";
import React from "react";

export interface IPaginator {
  pageCount: number;
  index: number;
  pathPrefix: string;
}

export interface IAuthor {
  authorsPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
}

export interface IArticle {
  slug: string;
  blurb: string;
  title: string;
  image: StaticImageData;
  date: Date;
}

interface IArticleQuery {
  edges: {
    node: IArticle;
  }[];
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

export type Template = React.FC<{
  pageContext: {
    article: IArticle;
    authors: IAuthor[];
    mailchimp: boolean;
    next: IArticle[];
  };
  location: Location;
}>;
