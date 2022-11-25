import { useRouter } from "next/router";

import SEO from "@components/SEO";
import { site } from "@data";
import { IArticle, IAuthor } from "@types";
import { prettyPrintDate } from "@utils";

interface ArticleSEOProps {
  article: IArticle;
  author: IAuthor;
  imagelocation?: string;
}

const ArticleSEO: React.FC<ArticleSEOProps> = ({
  article,
  author,
  imagelocation,
}) => {
  const siteUrl = site.url;
  const router = useRouter();

  imagelocation = `${siteUrl + article.image.src}`;
  const prettyDate = prettyPrintDate(article.date);

  return (
    <SEO
      authorName={author.name}
      authorsBio={author.bio}
      authorsSlug={author.id}
      dateforSEO={prettyDate}
      description={article.blurb}
      image={imagelocation}
      isBlogPost={true}
      articlepathName={siteUrl + router.pathname}
      published={prettyDate}
      title={article.title}
    />
  );
};

export default ArticleSEO;
