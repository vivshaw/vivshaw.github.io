import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import type { IAuthor } from "@types";

/**
 * Displays the biography and avatar for an Author, formatted for the Article Hero.
 */
const ArticleBio = ({ author }: { author: IAuthor }) => {
  return (
    <BioContainer>
      <BioAvatar
        href={author.profileLink}
        data-a11y="false"
        aria-label="Author's bio"
      >
        <BioAvatarInner>
          <RoundedImage alt={author.avatar.alt} fill src={author.avatar.src} />
        </BioAvatarInner>
      </BioAvatar>

      <BioText>{author.bio}</BioText>
    </BioContainer>
  );
};

export default ArticleBio;

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const BioAvatar = styled(Link)`
  display: block;
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: "";
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border: 2px solid ${(p) => p.theme.colors.accent};
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const BioAvatarInner = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;
  color: ${(p) => p.theme.colors.secondary};

  a {
    color: ${(p) => p.theme.colors.secondary};
    text-decoration: underline;
  }
`;
