import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import mediaqueries from "@styles/media";
import type { IAuthor } from "@types";

interface ArticleAuthorProps {
  author: IAuthor;
}

/**
 * Display the author's name and avatar, formatted to fit the Article Hero
 */
const ArticleAuthor: React.FC<ArticleAuthorProps> = ({ author }) => {
  return (
    <AuthorLink href={author.profileLink}>
      <AuthorAvatar>
        <RoundedImage alt={author.avatar.alt} fill src={author.avatar.src} />
      </AuthorAvatar>

      {/** TODO: Should this be a better tag? */}
      <strong>{author.name}</strong>

      {/** TODO: Does this... do anything? */}
      <HideOnMobile>,&nbsp;</HideOnMobile>
    </AuthorLink>
  );
};

export default ArticleAuthor;

const AuthorAvatar = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 14px;
  background: ${(p) => p.theme.colors.grey};
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
  }

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorLink = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;

  strong {
    transition: ${(p) => p.theme.colorModeTransition};
  }

  &:hover strong {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const HideOnMobile = styled.span`
  ${mediaqueries.phablet`
    display: none;
  `}
`;
